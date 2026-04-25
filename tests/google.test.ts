import test, { expect } from 'playwright/test';

import { BASE_URL } from './constant';

test('should render correctly with ID and enabled', async ({ page }) => {
  await page.goto(`${BASE_URL}/google-page`);

  const externalScript = page.locator('script[src*="googletagmanager"]');
  await expect(externalScript).toBeAttached();
  await expect(externalScript).toHaveAttribute('type', 'text/partytown');
  await expect(externalScript).toHaveAttribute('src', /id=G-X{8}/);
});