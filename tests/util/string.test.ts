import { joinString } from 'src/util/string';
import { test, expect } from 'vitest';

test.describe('String utilities', () => {
  test('joinString should join valid strings with a separator', () => {
    const input = [
      'Hello',
      null,
      'World',
      undefined,
      '',
      ' ',
      'Test',
      false
    ];
    const result = joinString(input);
    expect(result).toBe('Hello, World, Test');
  });

  test('joinString should use a custom separator if provided', () => {
    const input = ['Hello', 'World'];
    const result = joinString(input, ' - ');
    expect(result).toBe('Hello - World');
  });
});