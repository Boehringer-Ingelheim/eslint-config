const tseslint = require('typescript-eslint');

const base = require('./configs/base.js');
const experimentalNamingConvention = require('./configs/experimental-naming-convention.js');
const local = require('./configs/local.js');
const nextjs = require('./configs/nextjs.js');
const playwright = require('./configs/playwright.js');
const prettierDisable = require('./configs/prettier-disable.js');
const react = require('./configs/react.js');
const strict = require('./configs/strict.js');
const includeIgnoreFile = require('./lib/include-ignore-file.js');

module.exports = {
  config: tseslint.config,
  configs: {
    base,
    experimentalNamingConvention,
    local,
    nextjs,
    playwright,
    prettierDisable,
    react,
    strict,
  },
  includeIgnoreFile,
};
