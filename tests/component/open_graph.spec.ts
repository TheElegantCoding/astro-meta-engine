import { test, expect } from '@playwright/test';

import { BASE_URL } from '../constant/constant';

test('should render open graph meta tags correctly', async ({ page }) => {
  await page.goto(`${BASE_URL}/open-graph-page`);
  const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
  const ogSiteName = await page.locator('meta[property="og:site_name"]').getAttribute('content');
  const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
  const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
  const ogType = await page.locator('meta[property="og:type"]').getAttribute('content');
  const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');

  expect(ogTitle).toBe('Example Page');
  expect(ogSiteName).toBe('Example Site');
  expect(ogDescription).toBe('This is an example page for Open Graph.');
  expect(ogUrl).toBe(`${BASE_URL}/open-graph-page`);
  expect(ogType).toBe('website');
  expect(ogImage).toBe(`${BASE_URL}/image.jpg`);
});
