const prettier = require('eslint-config-prettier');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config({
  ...prettier,
  rules: {
    ...prettier.rules,
    curly: 'error',
    'no-confusing-arrow': ['error', { allowParens: false, onlyOneSimpleParam: false }],
  },
});
