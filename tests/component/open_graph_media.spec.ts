import { test, expect } from '@playwright/test';

import { BASE_URL } from '../constant/constant';

test('should render open graph media information correctly', async ({ page }) => {
  await page.goto(`${BASE_URL}/open-graph-media-page`);
  const ogImageWidth = await page.locator('meta[property="og:image:width"]').getAttribute('content');
  const ogImageHeight = await page.locator('meta[property="og:image:height"]').getAttribute('content');
  const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
  const ogSecureImage = await page.locator('meta[property="og:image:secure_url"]').getAttribute('content');
  const ogImageType = await page.locator('meta[property="og:image:type"]').getAttribute('content');

  expect(ogImageType).toBe('image/jpeg');
  expect(ogImageWidth).toBe('1200');
  expect(ogImageHeight).toBe('630');
  expect(ogImage).toBe(`${BASE_URL}/image.jpg`);
  expect(ogSecureImage).toBe(`${BASE_URL}/image.jpg`);
});
