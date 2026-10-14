/**
 * Render a book as plain HTML for search engines and AI crawlers, which don't run the reader's
 * JavaScript. The reader's Worker at politost.it/reader puts these files into the page it sends,
 * so a chapter's text is in the HTML at its own URL. In the browser the app replaces them.
 *
 * build.ts collects what writePages returns into dist/library.json, the one file the Worker
 * reads to know every book and page. Writes dist/pages/<id>@<version>/:
 *   capitolo/<id>.html      one per chapter, plus a .md copy for agents that ask for Markdown
 *   formulario.html, esercizi.html, esami.html   when the section is on and not empty
 *   assets/...              the book's images, which the HTML links to
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { setImmediate as nextTurn } from 'node:timers/promises';
import { JSDOM } from 'jsdom';
import {
  buildFormulaIndex,
  escapeHtml,
  parseChapterMarkdown,
  parseContentBlocks,
  parseExercises,
  preprocessContent,
  renderFormulaLatex,
  renderNumberedFormulaHtml,
  type Chapter,
  type ContentBlock,
  type Exercise,
  type FormulaRef,
  type InlineSegment,
  type PtsbBundle,
} from '@politost/content-core';

// content-core sanitizes its HTML with DOMPurify, which needs a window. Node has none.
// DOMPurify walks each fragment with a NodeIterator, and jsdom tracks those through WeakRefs. V8 keeps a
// WeakRef's target alive until the current task ends, so writePages awaits a turn of the event loop after
// every chapter and exercise. Without that, one large book holds about 4 GB until the build exits.
(globalThis as { window?: unknown }).window ??= new JSDOM('').window;

export const BOOKS_URL = process.env.BOOKS_URL ?? 'https://books.politost.it';
const READER = '/reader';

interface PageMeta {
  title: string;
  description: string;
}

export interface BookPages {
  id: string;
  version: string;
  title: string;
  subject: string;
  authors: string[];
  updated: string;
  /** null when the book's folder carries its own licence. */
  license: string | null;
  chapters: { id: string; number: number; title: string; paragraphs: { id: string; title: string }[] }[];
  /** Route under /reader/libro/<id>/, without a leading slash, to its title and description. */
  pages: Record<string, PageMeta>;
  /** The folder under the books site that holds this book's pages, such as `pages/esempio@1.0.1/`. */
  folder: string;
}

interface Context {
  bookId: string;
  base: string;
  formulas: Map<string, FormulaRef>;
  chapters: Chapter[];
  /** False when the book turns the formulario off: formula links then go to the chapter. */
  formulario: boolean;
}

/** Where a numbered formula is shown: its line in the formulario, or its block in the chapter. */
function formulaHref(ctx: Context, id: string): string | null {
  if (ctx.formulario) return `${bookPath(ctx, 'formulario')}#formula-${id}`;
  const formula = ctx.formulas.get(id);
  const chapter = formula && ctx.chapters.find((c) => c.meta.number === formula.chapter);
  return chapter ? `${chapterPath(ctx, chapter)}#formula-${id}` : null;
}

const attr = (text: string) => escapeHtml(text);
const bookPath = (ctx: Context, route = '') => `${READER}/libro/${ctx.bookId}/${route}`;
const chapterPath = (ctx: Context, chapter: Chapter) => bookPath(ctx, `capitolo/${chapter.meta.id}`);

/** `ref:chapter/3#p2` and `ref:formula/2.1` as the URL the reader opens. */
function refHref(ctx: Context, ref: string): string | null {
  const formula = /^formula\/([\d.]+)$/.exec(ref);
  if (formula) return formulaHref(ctx, formula[1]);
  const chapter = /^chapter\/(\d+)#(p\d+)$/.exec(ref);
  const target = chapter && ctx.chapters.find((c) => c.meta.number === Number(chapter[1]));
  return target ? `${chapterPath(ctx, target)}#${chapter![2]}` : null;
}

function inline(ctx: Context, segments: InlineSegment[]): string {
  return segments
    .map((seg) => {
      switch (seg.type) {
        case 'text':
          return seg.html;
        case 'strong':
        case 'em':
          return `<${seg.type}>${inline(ctx, seg.children)}</${seg.type}>`;
        case 'anchor':
          return seg.href
            ? `<a href="${attr(seg.href)}" rel="noopener">${inline(ctx, seg.children)}</a>`
            : inline(ctx, seg.children);
        case 'link': {
          const href = refHref(ctx, seg.ref);
          return href ? `<a href="${attr(href)}">${inline(ctx, seg.children)}</a>` : inline(ctx, seg.children);
        }
        case 'hover': {
          const href = ctx.formulas.has(seg.formulaId) ? formulaHref(ctx, seg.formulaId) : null;
          return href ? `<a href="${attr(href)}">(${escapeHtml(seg.formulaId)})</a>` : `(${escapeHtml(seg.formulaId)})`;
        }
      }
    })
    .join('');
}

function blocks(ctx: Context, list: ContentBlock[]): string {
  return list.map((block) => blockHtml(ctx, block)).join('\n');
}

function blockHtml(ctx: Context, block: ContentBlock): string {
  switch (block.type) {
    case 'heading':
      return `<h${block.level} class="content-subheading">${inline(ctx, block.segments)}</h${block.level}>`;
    case 'p':
      return block.tight ? inline(ctx, block.segments) : `<p class="content-paragraph">${inline(ctx, block.segments)}</p>`;
    case 'math':
      return `<div class="content-math">${block.html}</div>`;
    case 'list': {
      const tag = block.ordered ? 'ol' : 'ul';
      const start = block.ordered && block.start !== 1 ? ` start="${block.start}"` : '';
      return `<${tag} class="content-list"${start}>${block.items.map((item) => `<li>${blocks(ctx, item)}</li>`).join('')}</${tag}>`;
    }
    case 'quote':
      return `<blockquote class="content-quote">${blocks(ctx, block.blocks)}</blockquote>`;
    case 'code':
      return `<pre class="content-code"><code>${escapeHtml(block.text)}</code></pre>`;
    case 'hr':
      return '<hr class="content-rule">';
    case 'formula': {
      const formula = ctx.formulas.get(block.formulaId);
      return formula
        ? `<div class="numbered-formula" id="formula-${attr(formula.id)}">${renderNumberedFormulaHtml(formula)}</div>`
        : '';
    }
    case 'image': {
      const caption = block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : '';
      return `<figure class="sb-figure"><img src="${attr(`${ctx.base}${block.src}`)}" alt="${attr(block.alt)}" loading="lazy">${caption}</figure>`;
    }
  }
}

const flow = (ctx: Context, content: string) =>
  `<div class="content-flow sb-prose">${blocks(ctx, parseContentBlocks(preprocessContent(content)))}</div>`;

/** Inline TeX as it reads in a sentence: `120\,\text{km}` becomes `120 km`. */
function plainTex(tex: string): string {
  return tex
    .replace(/\\(?:text|mathrm|mathbf|operatorname)\{([^}]*)\}/g, '$1')
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '$1/$2')
    .replace(/\\[,;:! ]/g, ' ')
    .replace(/\\cdot/g, '·')
    .replace(/\\([a-zA-Z]+)/g, '$1')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Plain text of a passage, for descriptions: no markup, inline TeX simplified. */
export function plainText(content: string): string {
  return preprocessContent(content)
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/\$\$([\s\S]*?)\$\$/g, ' ')
    .replace(/\$([^$\n]+)\$/g, (_, tex: string) => plainTex(tex))
    .replace(/\[\[hover:([\d.]+)\]\]/g, '($1)')
    .replace(/\[\[link:[^|\]]+\|([^\]]+)\]\]/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^#+\s*/gm, '')
    .replace(/[*_`>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** About 155 characters, cut at a word. */
export function describe(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), max / 2)).replace(/[,;:.\s]+$/, '')}…`;
}

/** The Markdown copy of a chapter: its source, with the reader's own syntax turned into plain Markdown. */
function chapterMarkdown(ctx: Context, chapter: Chapter, bookTitle: string, url: string): string {
  const absolute = (href: string) => (href.startsWith('/') ? `https://politost.it${href}` : href);
  const body = chapter.paragraphs
    .map((para, i) => {
      const text = para.content
        .replace(/<!--FORMULA:([\d.]+)-->/g, (_, id: string) => {
          const f = ctx.formulas.get(id);
          return f ? `**(${f.id}) ${f.label}**\n\n${f.latex}` : '';
        })
        .replace(/<!--IMAGE:(\{[\s\S]*?\})-->/g, (_, json: string) => {
          try {
            const image = JSON.parse(json) as { src: string; alt?: string; caption?: string };
            return `![${image.alt ?? ''}](${ctx.base}${image.src})${image.caption ? `\n\n*${image.caption}*` : ''}`;
          } catch {
            return '';
          }
        })
        .replace(/\{\{formula:([\d.]+)\}\}/g, (_, id: string) => `(${id})`)
        .replace(/\[([^\]]+)\]\(ref:([^)]+)\)/g, (_, label: string, ref: string) => {
          const href = refHref(ctx, ref);
          return href ? `[${label}](${absolute(href)})` : label;
        });
      return `## ${chapter.meta.number}.${i + 1} ${para.title}\n\n${text.trim()}`;
    })
    .join('\n\n');
  return `---\ntitle: ${JSON.stringify(`${chapter.meta.number}. ${chapter.meta.title} · ${bookTitle}`)}\nurl: ${JSON.stringify(url)}\nlanguage: "it"\n---\n\n# ${chapter.meta.number}. ${chapter.meta.title}\n\n${body}\n`;
}

/** Links to every part of the book, under each page, so a crawler finds them all. */
function bookNav(ctx: Context, config: PtsbBundle['config'], sections: string[]): string {
  const chapters = ctx.chapters
    .map((c) => `<li><a href="${attr(chapterPath(ctx, c))}">${c.meta.number}. ${escapeHtml(c.meta.title)}</a></li>`)
    .join('');
  const extra = sections
    .map((key) => `<li><a href="${attr(bookPath(ctx, key))}">${escapeHtml(config.sections[key as keyof typeof config.sections].label)}</a></li>`)
    .join('');
  return `<nav class="ssr-book-nav" aria-label="${attr(config.title)}"><h2>${escapeHtml(config.title)}</h2><ol>${chapters}</ol>${extra ? `<ul>${extra}</ul>` : ''}</nav>`;
}

function crumbs(ctx: Context, title: string, current?: string): string {
  const book = `<a href="${attr(chapterPath(ctx, ctx.chapters[0]))}">${escapeHtml(title)}</a>`;
  return `<nav class="ssr-crumbs" aria-label="Percorso"><a href="${READER}/">Biblioteca</a> › ${book}${current ? ` › ${escapeHtml(current)}` : ''}</nav>`;
}

function exerciseHtml(ctx: Context, ex: Exercise, chapters: Chapter[]): string {
  const chapter = ex.chapter ? chapters.find((c) => c.meta.number === ex.chapter) : undefined;
  const meta = [
    chapter ? `<a href="${attr(chapterPath(ctx, chapter))}">Capitolo ${chapter.meta.number}</a>` : '',
    ex.difficulty ? escapeHtml(ex.difficulty) : '',
  ].filter(Boolean);
  const reveal = (label: string, content?: string) =>
    content ? `<details><summary>${label}</summary>${flow(ctx, content)}</details>` : '';
  return [
    `<article class="ssr-exercise" id="${attr(ex.id)}">`,
    `<h2>${ex.type === 'esame' ? 'Prova' : 'Esercizio'} ${escapeHtml(ex.id)}</h2>`,
    meta.length ? `<p class="ssr-meta">${meta.join(' · ')}</p>` : '',
    flow(ctx, ex.question),
    reveal('Suggerimento', ex.hint),
    reveal('Soluzione', ex.solution),
    '</article>',
  ].join('\n');
}

/**
 * KaTeX writes every formula twice: MathML, which carries the TeX source, and a pile of styled
 * spans that draw it. Crawlers need only the MathML, which browsers draw natively, and dropping
 * the spans makes a page about four times smaller. The class changes too, because katex.css
 * hides .katex-mathml from sight.
 */
export function mathmlOnly(html: string): string {
  const open = '<span class="katex-html" aria-hidden="true">';
  let out = '';
  let from = 0;
  for (let start = html.indexOf(open); start >= 0; start = html.indexOf(open, from)) {
    out += html.slice(from, start);
    let depth = 1;
    let at = start + open.length;
    while (depth > 0) {
      const next = html.indexOf('<span', at);
      const close = html.indexOf('</span>', at);
      if (close < 0) throw new Error('unbalanced KaTeX markup');
      if (next >= 0 && next < close) {
        depth += 1;
        at = next + 5;
      } else {
        depth -= 1;
        at = close + 7;
      }
    }
    from = at;
  }
  return (out + html.slice(from)).replaceAll('<span class="katex-mathml">', '<span class="ssr-math">');
}

function wrap(...parts: string[]): string {
  return mathmlOnly(`<main class="ssr-page sb-page sb-page-reading">\n${parts.filter(Boolean).join('\n')}\n</main>\n`);
}

/** Write the HTML pages of one book and return what the Worker needs to know about them. */
export async function writePages(dist: string, bundle: PtsbBundle, updated: string, ownLicense: boolean): Promise<BookPages> {
  const { config } = bundle;
  const version = config.version ?? '0.0.0';
  const folder = `pages/${config.id}@${version}/`;
  const out = join(dist, folder);
  const write = (path: string, text: string | Uint8Array) => {
    mkdirSync(dirname(join(out, path)), { recursive: true });
    writeFileSync(join(out, path), text);
  };

  const chapters = config.chapters.map((meta) => {
    const parsed = parseChapterMarkdown(bundle.chapterFiles[meta.file] ?? '', meta.number);
    parsed.meta = meta;
    return parsed;
  });
  const formulas = buildFormulaIndex(chapters);
  const ctx: Context = {
    bookId: config.id,
    base: `${BOOKS_URL}/${folder}`,
    formulas,
    chapters,
    formulario: config.sections.formulario.enabled && formulas.size > 0,
  };
  const esercizi = config.sections.esercizi.enabled ? parseExercises(bundle.eserciziRaw, 'esercizio') : [];
  const esami = config.sections.esami.enabled ? parseExercises(bundle.esamiRaw, 'esame') : [];
  const formulaCount = chapters.reduce((n, c) => n + c.formulas.length, 0);
  const sections = [
    config.sections.formulario.enabled && formulaCount > 0 ? 'formulario' : '',
    esercizi.length ? 'esercizi' : '',
    esami.length ? 'esami' : '',
  ].filter(Boolean);
  const nav = bookNav(ctx, config, sections);
  const pages: Record<string, PageMeta> = {};

  for (const [i, chapter] of chapters.entries()) {
    const route = `capitolo/${chapter.meta.id}`;
    const heading = `${chapter.meta.number}. ${chapter.meta.title}`;
    const sectionsHtml = chapter.paragraphs
      .map(
        (para, j) =>
          `<section class="paragraph-section" id="${attr(para.id)}"><h2>${chapter.meta.number}.${j + 1} ${escapeHtml(para.title)}</h2>${flow(ctx, para.content)}</section>`,
      )
      .join('\n');
    const pager = [
      chapters[i - 1] ? `<a rel="prev" href="${attr(chapterPath(ctx, chapters[i - 1]))}">← ${escapeHtml(chapters[i - 1].meta.title)}</a>` : '',
      chapters[i + 1] ? `<a rel="next" href="${attr(chapterPath(ctx, chapters[i + 1]))}">${escapeHtml(chapters[i + 1].meta.title)} →</a>` : '',
    ].join(' ');
    write(
      `${route}.html`,
      wrap(
        crumbs(ctx, config.title, `Capitolo ${chapter.meta.number}`),
        `<article class="chapter-content"><h1>${escapeHtml(heading)}</h1>\n${sectionsHtml}</article>`,
        `<nav class="ssr-pager" aria-label="Capitoli">${pager}</nav>`,
        nav,
      ),
    );
    write(`${route}.md`, chapterMarkdown(ctx, chapter, config.title, `https://politost.it${chapterPath(ctx, chapter)}`));
    const first = chapter.paragraphs[0];
    pages[route] = {
      title: heading,
      description: describe(first ? plainText(first.content) : `${config.title}, capitolo ${chapter.meta.number}.`),
    };
    await nextTurn();
  }

  if (sections.includes('formulario')) {
    const groups = chapters
      .filter((c) => c.formulas.length)
      .map((c) => {
        const items = c.formulas
          .map(
            (f) =>
              `<li id="formula-${attr(f.id)}"><a href="${attr(`${chapterPath(ctx, c)}#formula-${f.id}`)}">(${escapeHtml(f.id)}) ${escapeHtml(f.label)}</a><div class="formula-body">${renderFormulaLatex(f.latex)}</div></li>`,
          )
          .join('\n');
        return `<section><h2>Capitolo ${c.meta.number}. ${escapeHtml(c.meta.title)}</h2><ul class="ssr-formulas">${items}</ul></section>`;
      })
      .join('\n');
    const label = config.sections.formulario.label;
    write('formulario.html', wrap(crumbs(ctx, config.title, label), `<h1>${escapeHtml(label)}</h1>`, groups, nav));
    pages.formulario = {
      title: label,
      description: describe(
        `Le ${formulaCount === 1 ? 'formula numerata' : `${formulaCount} formule numerate`} di ${config.title}, divise per capitolo, ognuna con il link al paragrafo in cui compare.`,
      ),
    };
  }

  for (const [key, list] of [['esercizi', esercizi], ['esami', esami]] as const) {
    if (!list.length) continue;
    const label = config.sections[key].label;
    const items: string[] = [];
    for (const ex of list) {
      items.push(exerciseHtml(ctx, ex, chapters));
      await nextTurn();
    }
    write(`${key}.html`, wrap(crumbs(ctx, config.title, label), `<h1>${escapeHtml(label)}</h1>`, items.join('\n'), nav));
    const what = key === 'esercizi' ? (list.length === 1 ? 'esercizio' : 'esercizi') : list.length === 1 ? "prova d'esame" : "prove d'esame";
    pages[key] = {
      title: label,
      description: describe(`${list.length} ${what} di ${config.title}, con suggerimento e soluzione. ${plainText(list[0].question)}`),
    };
  }

  for (const [path, bytes] of Object.entries(bundle.assets)) write(path, bytes);

  const book: BookPages = {
    folder,
    id: config.id,
    version,
    title: config.title,
    subject: config.subject,
    authors: config.authors ?? [],
    updated,
    license: ownLicense ? null : 'https://creativecommons.org/licenses/by-sa/4.0/',
    chapters: chapters.map((c) => ({ id: c.meta.id, number: c.meta.number, title: c.meta.title, paragraphs: c.paragraphs.map((p) => ({ id: p.id, title: p.title })) })),
    pages,
  };
  return book;
}
