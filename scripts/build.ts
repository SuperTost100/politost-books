/**
 * Pack every book into dist/books/<id>@<version>.ptsb and write dist/catalog.json, the file
 * the reader fetches. Run `npm run check` first: this script trusts the books it packs.
 */
import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { packBook } from '@politost/content-core';
import { BOOKS_DIR, COVER_FILE, changedBooks, collectFiles, git, listBooks, readOptions } from './books.ts';
import { writePages } from './pages.ts';

const DIST = 'dist';
const READER_URL = 'https://politost.it/reader';

const options = readOptions();
const changed = options.onlyChanged ? changedBooks(options.base!) : null;
const books = listBooks().filter((folder) => !changed || changed.has(folder));

// A shallow clone (Cloudflare Pages may make one) dates every book at its newest commit,
// which would change the bytes of an unchanged version. Fetch the history first.
if (git('rev-parse', '--is-shallow-repository') === 'true') {
  console.log('shallow clone: fetching the full history');
  git('fetch', '--unshallow', '--quiet');
}

rmSync(DIST, { recursive: true, force: true });
mkdirSync(join(DIST, 'books'), { recursive: true });

/**
 * The last commit that touched the book, so a rebuild of the same version gives the same bytes.
 * A book not committed yet, while you preview it locally, gets the current time.
 */
function lastChange(folder: string): string {
  const date = git('log', '-1', '--format=%cI', '--', join(BOOKS_DIR, folder));
  return (date ? new Date(date) : new Date()).toISOString();
}

const entries = books.map((folder) => {
  const { bytes, bundle } = packBook(collectFiles(folder), {
    createdAt: lastChange(folder),
    producer: 'politost-books',
  });
  const { config } = bundle;
  const file = `books/${config.id}@${config.version}.ptsb`;
  writeFileSync(join(DIST, file), bytes);
  // A LICENSE file in the book's folder replaces the repository's CC BY-SA 4.0.
  const ownLicense = readdirSync(join(BOOKS_DIR, folder)).some((name) => /^LICEN[CS]E/i.test(name));
  const pages = writePages(DIST, bundle, lastChange(folder), ownLicense);

  let cover: string | undefined;
  if (existsSync(join(BOOKS_DIR, folder, COVER_FILE))) {
    mkdirSync(join(DIST, 'covers'), { recursive: true });
    cover = `covers/${config.id}.svg`;
    copyFileSync(join(BOOKS_DIR, folder, COVER_FILE), join(DIST, cover));
  }

  console.log(`packed ${file} (${bytes.length} bytes)`);
  return {
    id: config.id,
    title: config.title,
    subject: config.subject,
    authors: config.authors,
    version: config.version,
    specVersion: config.specVersion ?? '1.0',
    chapters: config.chapters.length,
    package: file,
    bytes: bytes.length,
    sha256: createHash('sha256').update(bytes).digest('hex'),
    cover,
    pages: `pages/${pages.id}@${pages.version}/`,
  };
});

writeFileSync(
  join(DIST, 'catalog.json'),
  `${JSON.stringify({ catalogVersion: 1, generatedAt: new Date().toISOString(), books: entries }, null, 2)}\n`,
);
copyFileSync(join('site', '_headers'), join(DIST, '_headers'));

const escape = (text: string) =>
  text.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const rows = entries
  .map((e) => `    <li><a href="${READER_URL}/libro/${e.id}">${escape(e.title)}</a> · ${escape(e.subject)} · v${escape(e.version!)} · <a href="${e.package}" download>.ptsb</a></li>`)
  .join('\n');
writeFileSync(
  join(DIST, 'index.html'),
  readFileSync(join('site', 'index.html'), 'utf-8').replace('<!-- BOOKS -->', rows),
);

console.log(`wrote ${DIST}/catalog.json with ${entries.length} book(s)`);
