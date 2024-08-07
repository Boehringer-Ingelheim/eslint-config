/**
 * While the sorting of imports is done by `eslint-plugin-perfectionist/sort-imports`,
 * the order and grouping of imports is still taken from the previous configuration of `eslint-plugin-import/order`,
 * as it feels more natural.
 * The following group names are available for configuration: https://eslint-plugin-perfectionist.azat.io/rules/sort-imports#groups
 */
const SORT_IMPORTS_GROUPS = [
  ['builtin', 'builtin-type'],
  ['external', 'external-type'],
  ['internal', 'internal-type'],
  ['parent', 'parent-type', 'sibling', 'sibling-type', 'index', 'index-type'],
  ['style', 'side-effect'],
  'object',
  'unknown',
];

/**
 * This is the the groups configuration of all the recommended configs by eslint-plugin-perfectionist.
 * This array can be used to reconfigure some options of the perfectionist/sort-classes rule without
 * overwriting the groups configuration of this rule.
 * This config can be found here:
 * - https://eslint-plugin-perfectionist.azat.io/rules/sort-classes#groups
 * - https://github.com/azat-io/eslint-plugin-perfectionist/blob/main/index.ts#L61
 */
const SORT_CLASSES_GROUPS = [
  'index-signature',
  'static-property',
  'private-property',
  'property',
  'constructor',
  'static-method',
  'private-method',
  'method',
  ['get-method', 'set-method'],
  'unknown',
];

/**
 * This array can be used to configure the perfectionist/sort-intersection-types rule.
 * The following group names are available for configuration: https://perfectionist.dev/rules/sort-intersection-types#groups
 */
const SORT_INTERSECTION_TYPES_GROUPS = [
  'conditional',
  'function',
  'import',
  'interseciont',
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
