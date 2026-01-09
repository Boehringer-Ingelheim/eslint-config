/**
 * While the sorting of imports is done by `eslint-plugin-perfectionist/sort-imports`,
 * the order and grouping of imports is still taken from the previous configuration of `eslint-plugin-import/order`,
 * as it feels more natural.
 * The following group names are available for configuration: https://eslint-plugin-perfectionist.azat.io/rules/sort-imports#groups
 */
const SORT_IMPORTS_GROUPS = [
  ['value-builtin', 'named-type-builtin'],
  ['value-external', 'named-type-external'],
  ['value-internal', 'named-type-internal'],
  ['value-parent', 'named-type-parent'],
  ['value-sibling', 'named-type-sibling'],
  ['value-index', 'named-type-index'],
  'value-style',
  ['value-side-effect-style', 'value-side-effect'],
  'value-ts-equals-import',
  'unknown',
];

/**
 * This is the the default groups configuration of all the recommended configs by eslint-plugin-perfectionist.
 * This array can be used to reconfigure some options of the perfectionist/sort-classes rule without
 * overwriting the groups configuration of this rule.
 * This config can be found here:
 * - https://eslint-plugin-perfectionist.azat.io/rules/sort-classes#groups
 * - https://github.com/azat-io/eslint-plugin-perfectionist/blob/main/index.ts#L61
 */
const SORT_CLASSES_GROUPS = [
  'index-signature',
  ['static-property', 'static-accessor-property'],
  ['static-get-method', 'static-set-method'],
  ['protected-static-property', 'protected-static-accessor-property'],
  ['protected-static-get-method', 'protected-static-set-method'],
  ['private-static-property', 'private-static-accessor-property'],
  ['private-static-get-method', 'private-static-set-method'],
  'static-block',
  ['property', 'accessor-property'],
  ['get-method', 'set-method'],
  ['protected-property', 'protected-accessor-property'],
  ['protected-get-method', 'protected-set-method'],
  ['private-property', 'private-accessor-property'],
  ['private-get-method', 'private-set-method'],
  'constructor',
  ['static-method', 'static-function-property'],
  ['protected-static-method', 'protected-static-function-property'],
  ['private-static-method', 'private-static-function-property'],
  ['method', 'function-property'],
  ['protected-method', 'protected-function-property'],
  ['private-method', 'private-function-property'],
  'unknown',
];

/**
 * Customized configuration to configure the perfectionist/sort-intersection-types rule.
 * The following group names are available for configuration: https://perfectionist.dev/rules/sort-intersection-types#groups
 */
const SORT_INTERSECTION_TYPES_GROUPS = [
  'conditional',
  'function',
  'import',
  'intersection',
  'union',
  'named',
  'keyword',
  'literal',
  'operator',
  'tuple',
  'object',
  'nullish',
  'unknown',
];

module.exports = {
  SORT_CLASSES_GROUPS,
  SORT_IMPORTS_GROUPS,
  SORT_INTERSECTION_TYPES_GROUPS,
};
