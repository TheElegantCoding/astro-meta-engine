import eslintConfig from 'eslint-config-universal-code';

const config = eslintConfig({
  astro: true,
  json: true,
  stylistic: true,
  unicorn: true,
  yml: true,
  perfectionist: true,
  typescript: true
}, {
  rules: {
    'unicorn/text-encoding-identifier-case': 'off'
  }
});

export default config;