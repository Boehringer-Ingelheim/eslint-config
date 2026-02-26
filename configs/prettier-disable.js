import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  ...prettier,
  rules: {
    ...prettier.rules,
    curly: 'error',
  },
});
