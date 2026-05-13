import { defineConfig } from 'eslint/config';
import * as prettier from 'eslint-config-prettier';

export default defineConfig({
  ...prettier,
  rules: {
    ...prettier.rules,
    curly: 'error',
  },
});
