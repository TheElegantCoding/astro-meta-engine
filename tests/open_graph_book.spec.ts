import { test, expect } from '@playwright/test';

import { BASE_URL } from './constant';

test('should render book information correctly', async ({ page }) => {
  await page.goto(`${BASE_URL}/open-graph-book-page`);

  const bookAuthor = await page.locator('meta[property="profile:first_name"]').getAttribute('content');
  const bookLastName = await page.locator('meta[property="profile:last_name"]').getAttribute('content');
  const bookIsbn = await page.locator('meta[property="book:isbn"]').getAttribute('content');
  const bookReleaseDate = await page.locator('meta[property="book:release_date"]').getAttribute('content');
  const bookTag = page.locator('meta[property="book:tag"]');
  const count = await bookTag.count();
  let bookTagContent = '';

  expect(bookAuthor).toBe('Jhon');
  expect(bookLastName).toBe('Doe');
  expect(bookIsbn).toBe('978-3-16-148410-0');
  expect(bookReleaseDate).toBe('2024-06-01T12:00:00Z');

  for (let index = 0; index < count; index++) {
    const tagContent = await bookTag.nth(index).getAttribute('content');
    bookTagContent += tagContent + (index < count - 1 ? ', ' : '');
  }
  expect(bookTagContent).toBe('Open Graph, Book, Technology');
});
