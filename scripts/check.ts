/**
 * Validate the books. Exits 1 when any book would be refused by the reader or by the publish
 * rules in CONTRIBUTING.md. With --base, a changed book must also raise its version.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { packBook } from '@politost/content-core';
import {
  BOOKS_DIR,
  annotate,
  changedBooks,
  collectFiles,
  compareSemver,
  git,
  isSemver,
  listBooks,
  readOptions,
} from './books.ts';

const options = readOptions();
const changed = options.base ? changedBooks(options.base) : null;
const books = listBooks().filter((folder) => !options.onlyChanged || changed?.has(folder));
let failed = 0;

function versionOnBase(folder: string): string | null {
  try {
    const json = JSON.parse(git('show', `${options.base}:${BOOKS_DIR}/${folder}/smartbook.json`)) as { version?: unknown };
    return typeof json.version === 'string' ? json.version : null;
  } catch {
    return null; // A new book.
  }
}

for (const folder of books) {
  const configPath = join(BOOKS_DIR, folder, 'smartbook.json');
  const errors: string[] = [];
  const fail = (message: string) => errors.push(message);

  if (!existsSync(configPath)) {
    annotate('error', configPath, 'smartbook.json is missing');
    failed++;
    continue;
  }

  let config: { id?: unknown; version?: unknown; access?: unknown };
  try {
    config = JSON.parse(readFileSync(configPath, 'utf-8'));
  } catch (err) {
    annotate('error', configPath, `smartbook.json is not valid JSON: ${(err as Error).message}`);
    failed++;
    continue;
  }

  if (config.id !== folder) fail(`id "${String(config.id)}" must equal the folder name "${folder}"`);
  if (!isSemver(config.version)) fail(`version must be semver, e.g. "1.0.0" (found ${JSON.stringify(config.version)})`);
  if (config.access !== undefined && config.access !== 'public') fail('only public books can be published here: remove "access" or set it to "public"');

  if (changed?.has(folder) && isSemver(config.version)) {
    const previous = versionOnBase(folder);
    if (previous && isSemver(previous) && compareSemver(config.version, previous) <= 0) {
      fail(`this PR changes the book, so version must go above ${previous} (found ${config.version}). Readers keep the old copy otherwise`);
    }
  }

  try {
    const { bundle } = packBook(collectFiles(folder));
    for (const warning of bundle.warnings) annotate('warning', configPath, warning);
  } catch (err) {
    for (const line of (err as Error).message.split('\n')) fail(line);
  }

  for (const message of errors) annotate('error', configPath, message);
  if (errors.length) failed++;
  else console.log(`ok  ${folder}@${String(config.version)}`);
}

if (books.length === 0) console.log('No books to check.');
if (failed) {
  console.error(`${failed} book(s) failed the check.`);
  process.exit(1);
}
