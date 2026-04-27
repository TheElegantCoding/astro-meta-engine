import { test, expect } from '@playwright/test';

import { BASE_URL } from '../constant/constant';

test('should render open profile information correctly', async ({ page }) => {
  await page.goto(`${BASE_URL}/open-graph-profile-page`);

  const profileFirstName = await page.locator('meta[property="profile:first_name"]').getAttribute('content');
  const profileLastName = await page.locator('meta[property="profile:last_name"]').getAttribute('content');
  const profileUsername = await page.locator('meta[property="profile:username"]').getAttribute('content');
  const profileGender = await page.locator('meta[property="profile:gender"]').getAttribute('content');

  expect(profileFirstName).toBe('John');
  expect(profileLastName).toBe('Doe');
  expect(profileUsername).toBe('john.doe');
  expect(profileGender).toBe('male');
});
