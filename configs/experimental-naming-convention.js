const { defineConfig } = require('eslint/config');

module.exports = defineConfig({
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        // Enforce that interface names do not start with an 'I'
        custom: {
          match: false,
          regex: '^I[A-Z]',
        },
        format: ['StrictPascalCase'],
        leadingUnderscore: 'forbid',
        selector: 'interface',
        trailingUnderscore: 'forbid',
      },
      {
        // Enforce that type alias names do not start with an 'T'
        custom: {
          match: false,
          regex: '^T[A-Z]',
        },
        format: ['StrictPascalCase'],
        leadingUnderscore: 'forbid',
        selector: 'typeAlias',
        trailingUnderscore: 'forbid',
      },
      {
        // Enforce that all top-level variables are in UPPER_CASE
        format: ['UPPER_CASE'],
        leadingUnderscore: 'forbid',
        modifiers: ['global'],
        selector: 'variable',
        trailingUnderscore: 'forbid',
        types: ['boolean', 'number', 'string'],
      },
      {
        // Enforce that all top-level array variables are in UPPER_CASE and are suffixed with a 'S' to indicate plural form
        format: ['UPPER_CASE'],
        leadingUnderscore: 'forbid',
        modifiers: ['global'],
        selector: 'variable',
        suffix: ['S'],
        trailingUnderscore: 'forbid',
        types: ['array'],
      },
      {
        // Enforce that array variables are suffixed with a 's' to indicate plural form
        format: ['strictCamelCase'],
        leadingUnderscore: 'forbid',
        selector: 'variable',
        suffix: ['s'],
        trailingUnderscore: 'forbid',
        types: ['array'],
      },
      {
        // Enforce that boolean variables are prefixed with an allowed verb
        format: ['StrictPascalCase'],
        leadingUnderscore: 'forbid',
        prefix: ['is', 'has', 'should', 'can'],
        selector: 'variable',
        trailingUnderscore: 'forbid',
        types: ['boolean'],
      },
    ],
  },
});
