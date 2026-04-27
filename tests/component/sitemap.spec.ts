import test, { expect } from 'playwright/test';

import { BASE_URL } from '../constant/constant';

test.describe('Sitemap Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/sitemap-page`);
  });

  test('should render the sitemap link in the head', ({ page }) => {
    const sitemapLink = page.locator('link[rel="sitemap"]');
    expect(sitemapLink).not.toBeNull();
  });

  test('should have the correct href for the sitemap link', async ({ page }) => {
    const sitemapLink = page.locator('link[rel="sitemap"]');
    const href = await sitemapLink.getAttribute('href');
    expect(href).toBe(`${BASE_URL}/sitemap-index.xml`);
  });
});
