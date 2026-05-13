import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import base from './base.js';

const strictTemplateExpressionsRule = (
  tseslint.plugin as typeof tseslint.plugin & {
    rules: Record<string, { meta: { docs: { recommended: { strict: [Record<string, unknown>] } } } }>;
  }
).rules['restrict-template-expressions'];

if (!strictTemplateExpressionsRule) {
  throw new Error(
    'Expected to find the "restrict-template-expressions" rule in the typescript-eslint plugin, but it was not found.',
  );
}

export default defineConfig(...base, tseslint.configs.strictTypeChecked, {
  rules: {
    // @typescript-eslint: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        ...strictTemplateExpressionsRule.meta.docs.recommended.strict[0],
        allowNumber: true,
      },
    ],

    // eslint-plugin-import: https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  },
});
