import { test, expect } from 'playwright/test';

import { BASE_URL } from '../constant/constant';

test.describe('Canonical', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/canonical-page`);
  });

  test('has canonical url', ({ page }) => {
    const canonical = page.locator("link[rel='canonical']");
    expect(canonical).not.toBeNull();
  });

  test('has correct canonical url', async ({ page }) => {
    const url = page.url();
    const canonical = await page.locator("link[rel='canonical']").getAttribute('href');
    expect(canonical).toBe(url);
  });
});