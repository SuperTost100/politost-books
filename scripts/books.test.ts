import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { builderSyncErrors, compareSemver, isSemver, madeByBuilder } from './books.ts';

test('isSemver accepts MAJOR.MINOR.PATCH with optional prerelease', () => {
  assert.ok(isSemver('1.0.0'));
  assert.ok(isSemver('2.10.3-beta.1'));
  assert.ok(!isSemver('1.0'));
  assert.ok(!isSemver(1));
});

test('compareSemver follows semver precedence', () => {
  const sorted = ['1.0.0-alpha', '1.0.0-alpha.1', '1.0.0-alpha.beta', '1.0.0-beta', '1.0.0-beta.2', '1.0.0-beta.11', '1.0.0-rc.1', '1.0.0', '1.0.1', '1.2.0', '1.10.0', '2.0.0'];
  for (let i = 1; i < sorted.length; i++) {
    assert.ok(compareSemver(sorted[i - 1], sorted[i]) < 0, `${sorted[i - 1]} < ${sorted[i]}`);
    assert.ok(compareSemver(sorted[i], sorted[i - 1]) > 0, `${sorted[i]} > ${sorted[i - 1]}`);
  }
  assert.equal(compareSemver('1.2.3', '1.2.3+build'), 0);
});

test('builderSyncErrors lists every file that differs from the manifest, and nothing for a published folder', () => {
  const sha = (text: string) => createHash('sha256').update(text).digest('hex');
  const bytes = (text: string) => new TextEncoder().encode(text);
  const manifest = { files: { 'smartbook.json': sha('{}'), 'chapters/01-a.md': sha('testo'), 'esami.md': sha('esami') } };
  assert.deepEqual(builderSyncErrors({ 'smartbook.json': bytes('{}'), 'chapters/01-a.md': bytes('testo'), 'esami.md': bytes('esami') }, manifest), []);
  assert.deepEqual(builderSyncErrors({ 'smartbook.json': bytes('{}'), 'chapters/01-a.md': bytes('testo corretto'), 'grafici.json': bytes('[]') }, manifest), [
    'chapters/01-a.md was edited outside the builder',
    'esami.md was removed outside the builder',
    'grafici.json was added outside the builder',
  ]);
});

test('madeByBuilder reads the producer of ptsb.json', () => {
  assert.ok(madeByBuilder('{"producer": "politost-smart-builder/0.5.1-alpha"}'));
  assert.ok(!madeByBuilder('{"producer": "someone-else/1.0"}'));
  assert.ok(!madeByBuilder('{}'));
  assert.ok(!madeByBuilder('not json'));
  assert.ok(!madeByBuilder(null));
});
