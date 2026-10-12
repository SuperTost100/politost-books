import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parseArgs } from 'node:util';

export const BOOKS_DIR = 'books';
/** Shown on the books site and listed in catalog.json, but not packed into the .ptsb. */
export const COVER_FILE = 'cover.svg';

export interface Options {
  /** Git ref to compare against, e.g. origin/main. */
  base?: string;
  /** Only books with files changed since `base`. */
  onlyChanged: boolean;
}

export function readOptions(): Options {
  const { values } = parseArgs({
    options: {
      base: { type: 'string' },
      'only-changed': { type: 'boolean', default: false },
    },
  });
  if (values['only-changed'] && !values.base) {
    throw new Error('--only-changed needs --base <ref>');
  }
  return { base: values.base, onlyChanged: values['only-changed'] ?? false };
}

export function git(...args: string[]): string {
  return execFileSync('git', args, { encoding: 'utf-8' }).trim();
}

/** Every folder under books/, sorted. */
export function listBooks(): string[] {
  return readdirSync(BOOKS_DIR)
    .filter((name) => !name.startsWith('.') && statSync(join(BOOKS_DIR, name)).isDirectory())
    .sort();
}

/** Book folders with a file added, changed or removed since `base`. */
export function changedBooks(base: string): Set<string> {
  const out = git('diff', '--name-only', `${base}...HEAD`, '--', BOOKS_DIR);
  return new Set(out.split('\n').filter(Boolean).map((path) => path.split('/')[1]));
}

/** The files of one book, keyed by path inside its folder. Dotfiles and the cover stay out. */
export function collectFiles(folder: string): Record<string, Uint8Array> {
  const root = join(BOOKS_DIR, folder);
  const out: Record<string, Uint8Array> = {};
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      if (name.startsWith('.')) continue;
      const full = join(dir, name);
      const rel = relative(root, full).replace(/\\/g, '/');
      if (rel === COVER_FILE) continue;
      if (statSync(full).isDirectory()) walk(full);
      else out[rel] = new Uint8Array(readFileSync(full));
    }
  };
  walk(root);
  return out;
}

const SEMVER_RE = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?(?:\+[0-9A-Za-z.-]+)?$/;

export function isSemver(value: unknown): value is string {
  return typeof value === 'string' && SEMVER_RE.test(value);
}

/** Semver precedence: negative when a < b. A prerelease sorts before its release. */
export function compareSemver(a: string, b: string): number {
  const [, aMaj, aMin, aPat, aPre] = SEMVER_RE.exec(a)!;
  const [, bMaj, bMin, bPat, bPre] = SEMVER_RE.exec(b)!;
  const core = Number(aMaj) - Number(bMaj) || Number(aMin) - Number(bMin) || Number(aPat) - Number(bPat);
  if (core) return core;
  if (aPre === bPre) return 0;
  if (aPre === undefined) return 1;
  if (bPre === undefined) return -1;
  const aParts = aPre.split('.');
  const bParts = bPre.split('.');
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const x = aParts[i];
    const y = bParts[i];
    if (x === undefined) return -1;
    if (y === undefined) return 1;
    const xNum = /^\d+$/.test(x);
    const yNum = /^\d+$/.test(y);
    if (xNum && yNum) {
      if (Number(x) !== Number(y)) return Number(x) - Number(y);
    } else if (xNum !== yNum) {
      return xNum ? -1 : 1;
    } else if (x !== y) {
      return x < y ? -1 : 1;
    }
  }
  return 0;
}

/** A GitHub annotation, so the message shows on the PR diff. */
export function annotate(level: 'error' | 'warning', file: string, message: string): void {
  const text = message.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
  console.log(`::${level} file=${file}::${text}`);
}
