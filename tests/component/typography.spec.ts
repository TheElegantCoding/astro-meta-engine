import { test, expect } from 'playwright/test';

import { BASE_URL } from '../constant/constant';

test.describe('Typography', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/typography-page`);
  });

  test('has links preload for typography', async ({ page }) => {
    const preloadLink = page.locator("link[rel='preload'][as='font']");
    await expect(preloadLink).toHaveCount(2);
  });
});