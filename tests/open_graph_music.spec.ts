import { test, expect } from '@playwright/test';

import { BASE_URL } from './constant';

test('should render open music information correctly', async ({ page }) => {
  await page.goto(`${BASE_URL}/open-graph-music-page`);
  const ogMusicDuration = await page.locator('meta[property="og:music:duration"]').getAttribute('content');
  const ogMusicAlbum = await page.locator('meta[property="og:music:album"]').getAttribute('content');
  const ogMusicAlbumDisc = await page.locator('meta[property="og:music:disc"]').getAttribute('content');
  const ogMusicAlbumTrack = await page.locator('meta[property="og:music:track"]').getAttribute('content');
  const ogMusicArtist = page.locator('meta[property="og:music:musician"]');
  const count = await ogMusicArtist.count();

  expect(ogMusicDuration).toBe('300');
  expect(ogMusicAlbum).toBe('album');
  expect(ogMusicAlbumDisc).toBe('1');
  expect(ogMusicAlbumTrack).toBe('2');

  expect(count).toBe(2);
});
