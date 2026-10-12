import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compareSemver, isSemver } from './books.ts';

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
