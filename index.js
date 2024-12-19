const tseslint = require('typescript-eslint');

const base = require('./configs/base.js');
const local = require('./configs/local.js');
const playwright = require('./configs/playwright.js');
const prettierDisable = require('./configs/prettier-disable.js');
const react = require('./configs/react.js');
const strict = require('./configs/strict.js');

module.exports = {
  config: tseslint.config,
  configs: {
    base,
    local,
    playwright,
    prettierDisable,
    react,
    strict,
  },
};