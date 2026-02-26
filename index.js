import tseslint from 'typescript-eslint';

import base from './configs/base.js';
import experimentalNamingConvention from './configs/experimental-naming-convention.js';
import local from './configs/local.js';
import nextjs from './configs/nextjs.js';
import playwright from './configs/playwright.js';
import prettierDisable from './configs/prettier-disable.js';
import react from './configs/react.js';
import strict from './configs/strict.js';
import { includeIgnoreFile } from './lib/include-ignore-file.js';

export default {
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
