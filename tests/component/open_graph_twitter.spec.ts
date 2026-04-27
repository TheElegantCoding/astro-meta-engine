import { test, expect } from '@playwright/test';

import { BASE_URL } from '../constant/constant';

test('should render Twitter Card meta tags correctly', async ({ page }) => {
  await page.goto(`${BASE_URL}/open-graph-twitter-page`);
  const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
  const twitterCreator = await page.locator('meta[name="twitter:creator"]').getAttribute('content');
  const twitterSite = await page.locator('meta[name="twitter:site"]').getAttribute('content');

  expect(twitterCard).toBe('summary_large_image');
  expect(twitterCreator).toBe('@john_doe');
  expect(twitterSite).toBe('@john_doe');
});
