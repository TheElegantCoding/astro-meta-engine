import test, { expect } from 'playwright/test';

import { BASE_URL } from './constant';

test.describe('RSS Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/rss-page`);
  });

  test('should render the RSS link in the head', ({ page }) => {
    const rssLink = page.locator("link[type='application/rss+xml']");
    expect(rssLink).not.toBeNull();
  });

  test('should have the correct href for the RSS link', async ({ page }) => {
    const rssLink = page.locator("link[type='application/rss+xml']");
    const href = await rssLink.getAttribute('href');
    expect(href).toBe(`${BASE_URL}/rss.xml`);
  });
});