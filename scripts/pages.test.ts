import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parsePtsbEntries } from '@politost/content-core';
import { collectFiles } from './books.ts';
import { describe, mathmlOnly, plainText, writePages } from './pages.ts';

async function renderEsempio() {
  const dist = mkdtempSync(join(tmpdir(), 'pages-'));
  const book = await writePages(dist, parsePtsbEntries(collectFiles('esempio')), '2026-10-13T00:00:00.000Z', false);
  const read = (path: string) => readFileSync(join(dist, `pages/esempio@${book.version}`, path), 'utf-8');
  return { book, read, done: () => rmSync(dist, { recursive: true, force: true }) };
}

test('writePages lists every chapter and section with a title and a description', async () => {
  const { book, done } = await renderEsempio();
  try {
    assert.deepEqual(Object.keys(book.pages), ['capitolo/benvenuto', 'capitolo/nel-libro', 'capitolo/prova-tu', 'formulario', 'esercizi', 'esami']);
    for (const page of Object.values(book.pages)) {
      assert.ok(page.title);
      assert.ok(page.description.length > 40 && page.description.length <= 155, page.description);
    }
    assert.equal(book.license, 'https://creativecommons.org/licenses/by-sa/4.0/');
  } finally {
    done();
  }
});

test('a chapter page holds its text, numbered formulas and links that work without JavaScript', async () => {
  const { read, done } = await renderEsempio();
  try {
    const html = read('capitolo/nel-libro.html');
    assert.match(html, /<h1>2\. Cosa trovi nel libro<\/h1>/);
    assert.match(html, /<section class="paragraph-section" id="p1"><h2>2\.1 Testo e formule<\/h2>/);
    assert.match(html, /<div class="numbered-formula" id="formula-2\.1">/);
    assert.match(html, /href="\/reader\/libro\/esempio\/capitolo\/benvenuto#p2"/);
    assert.match(html, /href="\/reader\/libro\/esempio\/formulario#formula-2\.1">\(2\.1\)<\/a>/);
    assert.match(html, /<img src="https:\/\/books\.politost\.it\/pages\/esempio@[^/]+\/assets\/cosa-trovi\.svg" alt="Schema delle sezioni di uno smartbook"/);
    assert.doesNotMatch(html, /\{\{formula|\[\[hover|ref:chapter|<!--/);

    const md = read('capitolo/nel-libro.md');
    assert.match(md, /^## 2\.1 Testo e formule$/m);
    assert.match(md, /\[paragrafo sulle sezioni\]\(https:\/\/politost\.it\/reader\/libro\/esempio\/capitolo\/benvenuto#p2\)/);
    assert.match(md, /!\[Schema delle sezioni di uno smartbook\]\(https:\/\/books\.politost\.it\//);
  } finally {
    done();
  }
});

test('without a formulario, formula links go to the formula in its chapter', async () => {
  const dist = mkdtempSync(join(tmpdir(), 'pages-'));
  try {
    const bundle = parsePtsbEntries(collectFiles('esempio'));
    bundle.config.sections.formulario.enabled = false;
    const book = await writePages(dist, bundle, '2026-10-13T00:00:00.000Z', false);
    assert.ok(!('formulario' in book.pages));
    const html = readFileSync(join(dist, book.folder, 'capitolo/nel-libro.html'), 'utf-8');
    assert.match(html, /href="\/reader\/libro\/esempio\/capitolo\/nel-libro#formula-2\.1">\(2\.1\)<\/a>/);
    assert.doesNotMatch(html, /formulario#/);
  } finally {
    rmSync(dist, { recursive: true, force: true });
  }
});

test('exercise pages keep hints and solutions in collapsed blocks', async () => {
  const { read, done } = await renderEsempio();
  try {
    const html = read('esercizi.html');
    assert.match(html, /<article class="ssr-exercise" id="E1\.1">/);
    assert.match(html, /<details><summary>Suggerimento<\/summary>/);
    assert.match(html, /<details><summary>Soluzione<\/summary>/);
  } finally {
    done();
  }
});

test('plainText drops markup and reads inline TeX as words', () => {
  assert.equal(plainText('Marco fa $120\\,\\text{km}$ in **due** ore, vedi {{formula:2.1}}.'), 'Marco fa 120 km in due ore, vedi (2.1).');
  assert.equal(plainText('Il [capitolo 3](ref:chapter/3#p1) e $$x^2$$ basta.'), 'Il capitolo 3 e basta.');
});

test('describe cuts at a word and stays within the limit', () => {
  const text = 'parola '.repeat(40).trim();
  const out = describe(text);
  assert.ok(out.length <= 155);
  assert.ok(out.endsWith('parola…'));
  assert.equal(describe('breve'), 'breve');
});

test('mathmlOnly keeps the MathML of a formula and drops the spans that draw it', () => {
  const katex = '<span class="katex"><span class="katex-mathml"><math><mi>x</mi></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="mord">x</span></span></span></span>';
  assert.equal(mathmlOnly(`a ${katex} b`), 'a <span class="katex"><span class="ssr-math"><math><mi>x</mi></math></span></span> b');
  assert.equal(mathmlOnly('no math'), 'no math');
});
