const nextPlugin = require('@next/eslint-plugin-next');
const tseslint = require('typescript-eslint');

const react = require('./react.js');

module.exports = tseslint.config(...react, {
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
  },
});
