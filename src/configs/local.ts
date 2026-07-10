import { defineConfig } from 'eslint/config';
import isCI from 'is-ci';

export default defineConfig(
  isCI
    ? {}
    : {
        rules: {
          // Only activate in CI, as suggested here: https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting#eslint-plugin-import
          'import-x/no-cycle': 'off',
          'import-x/no-deprecated': 'off',
          'import-x/no-named-as-default': 'off',
          'import-x/no-unused-modules': 'off',
        },
      },
);
