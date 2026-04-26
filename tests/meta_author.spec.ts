import { test, expect } from '@playwright/test';

import { BASE_URL } from './constant';

test.describe('Meta author', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/meta-author-page`);
  });

  test('should render author information correctly', async ({ page }) => {
    const authorName = await page.locator('meta[name="author"]').getAttribute('content');

    expect(authorName).toBe('Luis Miguel, luis@gmail.com, https://luis.com');
  });

  test('should render copyright information correctly', async ({ page }) => {
    const copyright = await page.locator('meta[name="copyright"]').getAttribute('content');

    expect(copyright).toBe('Copyright');
  });
});