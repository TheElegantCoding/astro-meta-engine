import { test, expect } from '@playwright/test';

import { BASE_URL } from '../constant/constant';

test('should render locale information correctly', async ({ page }) => {
  await page.goto(`${BASE_URL}/open-graph-locale-page`);

  const ogLocale = await page.locator('meta[property="og:locale"]').getAttribute('content');
  const ogLocaleAlternate = page.locator('meta[property="og:locale:alternate"]');
  const count = await ogLocaleAlternate.count();
  let ogLocaleAlternateContent = '';

  expect(ogLocale).toBe('es');

  for (let index = 0; index < count; index++) {
    const localeContent = await ogLocaleAlternate.nth(index).getAttribute('content');
    ogLocaleAlternateContent += localeContent + (index < count - 1 ? ', ' : '');
  }
  expect(ogLocaleAlternateContent).toBe('es, en, fr');
});
