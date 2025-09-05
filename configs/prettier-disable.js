const prettier = require('eslint-config-prettier');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig({
  ...prettier,
  rules: {
    ...prettier.rules,
    curly: 'error',
  },
});
