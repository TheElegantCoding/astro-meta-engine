import { test, expect } from 'playwright/test';

import { BASE_URL } from '../constant/constant';

test.describe('Favicon', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/favicon-page`);
  });

  test('should have all required favicon links and types', async ({ page }) => {
    const png = page.locator("link[type='image/png']");
    const svg = page.locator("link[type='image/svg+xml']");
    const apple = page.locator("link[rel='apple-touch-icon']");
    const ico = page.locator("link[rel='shortcut icon']");
    const manifest = page.locator("link[rel='manifest']");

    await expect(png).toHaveAttribute('href', /.*\.png/);
    await expect(svg).toHaveAttribute('href', /.*\.svg/);
    await expect(apple).toBeAttached();
    await expect(ico).toHaveAttribute('rel', 'shortcut icon');
    await expect(manifest).toHaveAttribute('href', /.*\.webmanifest|.*\.json/);
  });

  test('has correct favicon url', async ({ page }) => {
    const png = await page.locator("link[type='image/png']").getAttribute('href');
    const svg = await page.locator("link[type='image/svg+xml']").getAttribute('href');
    const apple = await page.locator("link[rel='apple-touch-icon']").getAttribute('href');
    const ico = await page.locator("link[rel='shortcut icon']").getAttribute('href');
    const manifest = await page.locator("link[rel='manifest']").getAttribute('href');

    expect(png).toContain(BASE_URL);
    expect(svg).toContain(BASE_URL);
    expect(apple).toContain(BASE_URL);
    expect(ico).toContain(BASE_URL);
    expect(manifest).toContain(BASE_URL);
  });
});