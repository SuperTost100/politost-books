/**
 * Fail when a book the builder publishes was edited by hand. A book with a `.builder.json` must
 * match it file by file. With --base, a book this PR changes that came from the builder (its
 * ptsb.json names the builder as producer, here or on the base) must have one: its content is
 * fixed in politost-smartbook-builder and published from there, so the next export keeps the fix.
 * Books the PR does not touch are not read, and books written by hand, such as books/esempio,
 * pass. The cover is the repo's.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { BOOKS_DIR, BUILDER_MANIFEST, COVER_FILE, annotate, backportHint, builderSyncErrors, collectFiles, git, listBooks, madeByBuilder, readBuilderManifest, readOptions } from './books.ts';

const options = readOptions();
// The books this PR changes, leaving out a change to the cover alone.
const changed = options.base
  ? new Set(
      git('diff', '--name-only', `${options.base}...HEAD`, '--', BOOKS_DIR)
        .split('\n')
        .filter((path) => path && path.split('/')[2] !== COVER_FILE)
        .map((path) => path.split('/')[1]),
    )
  : null;
let failed = 0;

function builderBook(folder: string): boolean {
  const path = join(BOOKS_DIR, folder, 'ptsb.json');
  if (madeByBuilder(existsSync(path) ? readFileSync(path, 'utf-8') : null)) return true;
  if (!options.base) return false;
  try {
    return madeByBuilder(execFileSync('git', ['show', `${options.base}:${path}`], { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] }));
  } catch {
    return false; // No ptsb.json on the base either.
  }
}

// With --base only the books this PR changes are read; on main every book is.
for (const folder of listBooks().filter((name) => !changed || changed.has(name))) {
  const manifestPath = join(BOOKS_DIR, folder, BUILDER_MANIFEST);
  let manifest;
  try {
    manifest = readBuilderManifest(folder);
  } catch (err) {
    annotate('error', manifestPath, (err as Error).message);
    failed++;
    continue;
  }
  if (!manifest) {
    if (changed && builderBook(folder)) {
      annotate('error', join(BOOKS_DIR, folder, 'smartbook.json'), `books/${folder} has no ${BUILDER_MANIFEST}, so this change did not come from the builder. ${backportHint(folder)}`);
      failed++;
    }
    continue;
  }
  const errors = builderSyncErrors(collectFiles(folder), manifest);
  for (const message of errors) {
    const file = message.split(' ')[0];
    annotate('error', join(BOOKS_DIR, folder, file), `hand edit in books/${folder}: ${message}. ${backportHint(folder, manifest.projectId)}`);
  }
  if (errors.length) failed++;
  else console.log(`ok  ${folder} matches ${BUILDER_MANIFEST}`);
}

if (failed) {
  console.error(`${failed} book(s) differ from what the builder published.`);
  process.exit(1);
}
