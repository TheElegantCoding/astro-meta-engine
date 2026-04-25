/* eslint-disable ts/no-unsafe-member-access */
import { test, expect } from 'playwright/test';

import { BASE_URL } from './constant';

test.describe('Structured Data', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/structured-data-page`);
  });

  test('has structured data', ({ page }) => {
    const structuredData = page.locator("script[type='application/ld+json']");
    expect(structuredData).not.toBeNull();
  });

  test('has valid JSON-LD structured data', async ({ page }) => {
    const structuredData = await page.locator("script[type='application/ld+json']").textContent();
    const data = structuredData ?? null;

    expect(data ? JSON.parse(data) : null).not.toBeNull();
  });

  test('has correct structured data type', async ({ page }) => {
    const structuredData = await page.locator("script[type='application/ld+json']").textContent();
    const data = structuredData ?? null;
    expect(data ? JSON.parse(data)['@type'] : null).toBe('WebSite');
  });
});