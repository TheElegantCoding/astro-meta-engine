import { test, expect } from '@playwright/test';

import { BASE_URL } from '../constant/constant';

test.describe('Base meta data', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/base-page`);
  });

  test('has title', async ({ page }) => {
    const title = await page.title();
    expect(title).not.toBeNull();
  });

  test('has description', async ({ page }) => {
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBe('Astro description');
  });

  test('has keywords', async ({ page }) => {
    const keywords = await page.locator("meta[name='keywords']").getAttribute('content');
    expect(keywords).toBe('Astro, Meta, Engine');
  });

  test('has charset', async ({ page }) => {
    const charset = await page.locator('meta[charset]').getAttribute('charset');
    expect(charset).toBe('utf-8');
  });

  test('has viewport', async ({ page }) => {
    const viewport = await page.locator("meta[name='viewport']").getAttribute('content');
    expect(viewport).toBe('width=device-width, initial-scale=1, viewport-fit=cover');
  });

  test('has xUA compatibility', async ({ page }) => {
    const viewport = await page.locator("meta[http-equiv='X-UA-Compatible']").getAttribute('content');
    expect(viewport).toBe('IE=edge');
  });
});