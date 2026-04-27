import { buildUrl, removeTrailingSlash } from 'src/util/link';
import { test, expect } from 'vitest';

test.describe('Link utilities', () => {
  test('removeTrailingSlash should remove trailing slash from URL', () => {
    expect(removeTrailingSlash('https://example.com/')).toBe('https://example.com');
    expect(removeTrailingSlash('https://example.com/path/')).toBe('https://example.com/path');
    expect(removeTrailingSlash('https://example.com')).toBe('https://example.com');
    expect(removeTrailingSlash('/example/')).toBe('/example');
  });

  test('buildUrl should build URL correctly with base', () => {
    expect(buildUrl('/path', 'https://example.com')).toBe('https://example.com/path');
    expect(buildUrl('http://external.com/path', 'https://example.com')).toBe('http://external.com/path');
    expect(buildUrl('/path/', 'https://example.com/')).toBe('https://example.com/path');
  });

  test('buildUrl should return path without base if base is not provided', () => {
    expect(buildUrl('/path')).toBe('/path');
    expect(buildUrl('/path/')).toBe('/path');
  });
});