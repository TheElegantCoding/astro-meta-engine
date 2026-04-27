import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

const config = defineConfig({
  test: {
    root: resolve(__dirname, '.'),
    include: ['tests/**/*.test.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.astro/**',
      '../**'
    ],
    globals: true
  },
  resolve: {
    alias: {
      src: resolve(__dirname, './src')
    }
  }
});

export default config;