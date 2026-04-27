import { test, expect } from '@playwright/test';

import { BASE_URL } from '../constant/constant';

test('should render article information correctly', async ({ page }) => {
  await page.goto(`${BASE_URL}/open-graph-article-page`);
  const articlePublishedTime = await page.locator('meta[property="article:published_time"]').getAttribute('content');
  const articleModifiedTime = await page.locator('meta[property="article:modified_time"]').getAttribute('content');
  const articleExpirationTime = await page.locator('meta[property="article:expiration_time"]').getAttribute('content');
  const articleAuthor = await page.locator('meta[property="profile:first_name"]').getAttribute('content');
  const articleLastName = await page.locator('meta[property="profile:last_name"]').getAttribute('content');
  const articleSection = await page.locator('meta[property="article:section"]').getAttribute('content');
  const articleTag = page.locator('meta[property="article:tag"]');
  const count = await articleTag.count();
  let articleTagContent = '';

  expect(articlePublishedTime).toBe('2024-05-01T12:00:00Z');
  expect(articleModifiedTime).toBe('2024-06-01T12:00:00Z');
  expect(articleExpirationTime).toBe('2024-06-30T12:00:00Z');
  expect(articleAuthor).toBe('John');
  expect(articleLastName).toBe('Doe');
  expect(articleSection).toBe('Technology');

  for (let index = 0; index < count; index++) {
    const tagContent = await articleTag.nth(index).getAttribute('content');
    articleTagContent += tagContent + (index < count - 1 ? ', ' : '');
  }
  expect(articleTagContent).toBe('Open Graph, Article, Technology');
});
