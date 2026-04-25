import { test, expect } from '@playwright/test';

import { BASE_URL } from './constant';

test.describe('Language alternatives', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/language-page`);
  });

  test('should render default language alternative', ({ page }) => {
    const defaultLanguageLink = page.locator('link[rel="alternate"][hreflang="x-default"]');
    expect(defaultLanguageLink).not.toBeNull();
  });

  test('should render language alternatives', async ({ page }) => {
    const languageLinks = page.locator('link[rel="alternate"][hreflang]');
    const count = await languageLinks.count();
    expect(count).toBeGreaterThan(1);
  });

  test('should have correct url for language alternatives', async ({ page }) => {
    const languageLinks = page.locator('link[rel="alternate"][hreflang]');
    const count = await languageLinks.count();

    for (let index = 0; index < count; index++) {
      const hreflang = await languageLinks.nth(index).getAttribute('hreflang');
      const href = await languageLinks.nth(index).getAttribute('href');

      if (hreflang === 'x-default') {
        expect(href).toBe(`${BASE_URL}/language-page`);
      } else {
        expect(href).toBe(`${BASE_URL}/${hreflang}/language-page`);
      }
    }
  });
});