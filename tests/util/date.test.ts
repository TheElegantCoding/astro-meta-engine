import { formatDate } from 'src/util/date';
import { test, expect } from 'vitest';

test.describe('Format Date', () => {
  test('should format Date object to ISO string', () => {
    const date = new Date('2024-01-01T00:00:00Z');
    const formatted = formatDate(date);
    expect(formatted).toBe('2024-01-01T00:00:00.000Z');
  });

  test('should return string as is', () => {
    const dateString = '2024-01-01T00:00:00Z';
    const formatted = formatDate(dateString);
    expect(formatted).toBe(dateString);
  });
});
