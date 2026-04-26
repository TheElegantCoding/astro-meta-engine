import { test, expect } from '@playwright/test';

import { BASE_URL } from './constant';

test('should render robots meta tags correctly', async ({ page }) => {
  await page.goto(`${BASE_URL}/robots-page`);

  const robot = await page.locator("meta[name='robots']").getAttribute('content');
  expect(robot).toBe('noindex, nofollow, noarchive');
});
