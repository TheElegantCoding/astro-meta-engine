import { test, expect } from '@playwright/test';

import { BASE_URL } from './constant';

test('should render open graph video meta tags correctly', async ({ page }) => {
  await page.goto(`${BASE_URL}/open-graph-video-page`);
  const ogVideo = await page.locator('meta[property="og:video"]').getAttribute('content');
  const ogVideoType = await page.locator('meta[property="og:video:type"]').getAttribute('content');
  const ogVideoWidth = await page.locator('meta[property="og:video:width"]').getAttribute('content');
  const ogVideoHeight = await page.locator('meta[property="og:video:height"]').getAttribute('content');
  const ogVideoDuration = await page.locator('meta[property="og:video:duration"]').getAttribute('content');
  const ogVideoReleaseDate = await page.locator('meta[property="og:video:release_date"]').getAttribute('content');
  const ogVideoAlt = await page.locator('meta[property="og:video:alt"]').getAttribute('content');
  const ogVideoSecureUrl = await page.locator('meta[property="og:video:secure_url"]').getAttribute('content');
  const ogVideoTag = page.locator('meta[property="og:video:tag"]');
  const count = await ogVideoTag.count();
  const ogVideoTags = [];

  expect(ogVideoSecureUrl).toBe(`${BASE_URL}/video.mp4`);
  expect(ogVideo).toBe(`${BASE_URL}/video.mp4`);
  expect(ogVideoType).toBe('video/mp4');
  expect(ogVideoWidth).toBe('1280');
  expect(ogVideoHeight).toBe('720');
  expect(ogVideoDuration).toBe('120');
  expect(ogVideoReleaseDate).toBe('2024-01-01T00:00:00Z');
  expect(ogVideoAlt).toBe('An example video');

  for (let index = 0; index < count; index++) {
    const tag = await ogVideoTag.nth(index).getAttribute('content');
    ogVideoTags.push(tag);
  }

  expect(ogVideoTags).toEqual(['example', 'video']);
});
