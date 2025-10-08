# [9.0.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v8.2.0...v9.0.0) (2025-10-08)


### Features

* **deps:** update eslint-plugin-sonarjs dependency ([d7688db](https://github.com/Boehringer-Ingelheim/eslint-config/commit/d7688db39ee0f1894a2f2e419fb2ea14eac1d16e)), closes [#85](https://github.com/Boehringer-Ingelheim/eslint-config/issues/85)


### BREAKING CHANGES

* **deps:** The new major version of `eslint-plugin-sonarjs` makes all SonarJS rules available to ESLint which may lead to new linting errors in your codebase. Please review the `eslint-plugin-sonarjs` documentation: https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md

# [9.0.0-sonarjs-v3.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v8.2.0...v9.0.0-sonarjs-v3.1) (2025-10-07)


### Features

* **deps:** update eslint-plugin-sonarjs dependency ([d7688db](https://github.com/Boehringer-Ingelheim/eslint-config/commit/d7688db39ee0f1894a2f2e419fb2ea14eac1d16e)), closes [#85](https://github.com/Boehringer-Ingelheim/eslint-config/issues/85)


### BREAKING CHANGES

* **deps:** The new major version of `eslint-plugin-sonarjs` makes all SonarJS rules available to ESLint which may lead to new linting errors in your codebase. Please review the `eslint-plugin-sonarjs` documentation: https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md

# [8.2.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v8.1.0...v8.2.0) (2025-10-07)


### Features

* **deps:** upgrade deps ([7f95247](https://github.com/Boehringer-Ingelheim/eslint-config/commit/7f95247faaebec8be215ff9eeaf439b2ac1045fc))

# [8.1.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v8.0.0...v8.1.0) (2025-09-12)


### Features

* **deps:** update dependencies ([9e138cd](https://github.com/Boehringer-Ingelheim/eslint-config/commit/9e138cd2b80cbd5d8595847f299e72b8a54b39cb))
* **eslint:** adjust and fine-tune the rule set on file level ([832484d](https://github.com/Boehringer-Ingelheim/eslint-config/commit/832484d24659536e25607b424cbe25aba06fd7a2))

# [8.1.0-adjust-nextjs.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v8.0.0...v8.1.0-adjust-nextjs.1) (2025-09-11)


### Features

* **eslint:** adjust and fine-tune the rule set on file level ([832484d](https://github.com/Boehringer-Ingelheim/eslint-config/commit/832484d24659536e25607b424cbe25aba06fd7a2))

# [8.0.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.4.0...v8.0.0) (2025-09-05)


### Features

* **deps:** update dependencies ([b699e7a](https://github.com/Boehringer-Ingelheim/eslint-config/commit/b699e7a0984cf2cc64a36f75cf128b6cb39165b2))
* **eslint:** migrate from `tseslint.config` to `eslint.defineConfig` ([fa25e0c](https://github.com/Boehringer-Ingelheim/eslint-config/commit/fa25e0cb93fefbda4177c15e041be5d18c0e94f9))


### BREAKING CHANGES

* **eslint:** The `boehringer.config(...)` utility function has been removed in favor of ESLint core’s `defineConfig(...)`. Replace `boehringer.config(...)` with `defineConfig(...)` from `eslint/config`

```diff
import boehringer from '@boehringer-ingelheim/eslint-config';
+ import { defineConfig } from 'eslint/config';

- export default boehringer.config(
+ export default defineConfig(
  boehringer.configs.strict,
  {
    rules: {
      'no-empty-function': 'off',
    },
  }
);
```
* **deps:** Remove support for ESLint `v8`; minimum required version is now ESLint `v9.34.0`. Update your dependencies to use ESLint `9.34.0` or newer.

# [8.0.0-defineConfig.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v8.0.0-defineConfig.1...v8.0.0-defineConfig.2) (2025-09-04)


### Features

* **eslint:** migrate from `tseslint.config` to `eslint.defineConfig` ([fa25e0c](https://github.com/Boehringer-Ingelheim/eslint-config/commit/fa25e0cb93fefbda4177c15e041be5d18c0e94f9))


### Reverts

* "feat(eslint): migrate from `tseslint.config` to `eslint.defineConfig`" ([2017fbd](https://github.com/Boehringer-Ingelheim/eslint-config/commit/2017fbda7ec1d23ec3e57297c48644e70f11de8b))


### BREAKING CHANGES

* **eslint:** The `boehringer.config(...)` utility function has been removed in favor of ESLint core’s `defineConfig(...)`. Replace `boehringer.config(...)` with `defineConfig(...)` from `eslint/config`

```diff
import boehringer from '@boehringer-ingelheim/eslint-config';
+ import { defineConfig } from 'eslint/config';

- export default boehringer.config(
+ export default defineConfig(
  boehringer.configs.strict,
  {
    rules: {
      'no-empty-function': 'off',
    },
  }
);
```

# [8.0.0-defineConfig.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.4.0...v8.0.0-defineConfig.1) (2025-09-04)


### Features

* **deps:** update dependencies ([b699e7a](https://github.com/Boehringer-Ingelheim/eslint-config/commit/b699e7a0984cf2cc64a36f75cf128b6cb39165b2))
* **eslint:** migrate from `tseslint.config` to `eslint.defineConfig` ([9afc0c4](https://github.com/Boehringer-Ingelheim/eslint-config/commit/9afc0c401781bef59a7957a01d45f9bc0b307863))


### BREAKING CHANGES

* **eslint:** The `config(...)` utility function has been removed in favor of ESLint core’s `defineConfig(...)`. Replace `boehringer.config(...)` with `boehringer.defineConfig(...)`
* **deps:** Remove support for ESLint `v8`; minimum required version is now ESLint `v9.34.0`. Update your dependencies to use ESLint `9.34.0` or newer.

# [7.4.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.3.1...v7.4.0) (2025-07-24)


### Features

* **deps:** update dependencies ([1e896ba](https://github.com/Boehringer-Ingelheim/eslint-config/commit/1e896bac9b5296e0903ac65527eea73b09212250))

## [7.3.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.3.0...v7.3.1) (2025-07-16)


### Bug Fixes

* **base:** remove redundant no-empty-function rule from base config ([afdfd62](https://github.com/Boehringer-Ingelheim/eslint-config/commit/afdfd622a8c0ed4fc80e98fbca9c318a0533a777))

# [7.3.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.2.0...v7.3.0) (2025-02-19)


### Bug Fixes

* destructure includeIgnoreFile import ([ae75bc5](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ae75bc560920aba6f8a516271dee775a5188afb0))


### Features

* **deps:** update dependencies ([8a670a7](https://github.com/Boehringer-Ingelheim/eslint-config/commit/8a670a78dec735be91ccf6f3b79bdd1797c8a350))
* **lib:** add includeIgnoreFile to support including .gitignore in ESLint configuration ([e78806a](https://github.com/Boehringer-Ingelheim/eslint-config/commit/e78806a070649993c6c30ab1a5a7fb09cfeed75b))

# [7.3.0-include-ignore-file.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.3.0-include-ignore-file.1...v7.3.0-include-ignore-file.2) (2025-02-17)


### Bug Fixes

* destructure includeIgnoreFile import ([ae75bc5](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ae75bc560920aba6f8a516271dee775a5188afb0))

# [7.3.0-include-ignore-file.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.2.0...v7.3.0-include-ignore-file.1) (2025-02-17)


### Features

* **deps:** update dependencies ([8a670a7](https://github.com/Boehringer-Ingelheim/eslint-config/commit/8a670a78dec735be91ccf6f3b79bdd1797c8a350))
* **lib:** add includeIgnoreFile to support including .gitignore in ESLint configuration ([e78806a](https://github.com/Boehringer-Ingelheim/eslint-config/commit/e78806a070649993c6c30ab1a5a7fb09cfeed75b))

# [7.2.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.1.0...v7.2.0) (2025-02-14)


### Features

* **playwright:** disable unbound-method rule for component testing compatibility ([47349c9](https://github.com/Boehringer-Ingelheim/eslint-config/commit/47349c9c9eae8ec6d93e6da51fd62acf3359a12a))

# [7.2.0-support-playwright-ct.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.1.0...v7.2.0-support-playwright-ct.1) (2025-02-14)


### Features

* **playwright:** disable unbound-method rule for component testing compatibility ([47349c9](https://github.com/Boehringer-Ingelheim/eslint-config/commit/47349c9c9eae8ec6d93e6da51fd62acf3359a12a))

# [7.1.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0...v7.1.0) (2025-02-04)


### Bug Fixes

* **config:** [base] update test file patterns to only match javascript files ([478ec71](https://github.com/Boehringer-Ingelheim/eslint-config/commit/478ec71409ba0fbb41e11bab55cd6dfafefcdf22))


### Features

* **deps:** update dependencies ([8bc20e7](https://github.com/Boehringer-Ingelheim/eslint-config/commit/8bc20e7ea884dd195f6874ec67b58bdcbbd2843c))

# [7.0.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.2...v7.0.0) (2025-01-20)


### Bug Fixes

* **base:** switch some perfectionist references to flatconfig ([a6697cc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a6697cc2c6c11ff717732abe741d1300c6d3a608))
* **base:** turn off import/no-unused-modules for now ([a8f15dc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a8f15dc3a35fc6e6d774d8e766985772009862f0))
* publishes type declarations ([a410e8e](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a410e8eed04e5bde28eb6aa14be19858bb685cc9))
* **react:** [sort-jsx-props] use regex pattern for custom groups ([720df19](https://github.com/Boehringer-Ingelheim/eslint-config/commit/720df196a0b6f1e0c480f95b7e6c6fa47e82bac0))
* **scripts:** [repair] use exact rimraf version to not use a local and possible incompatible version ([059835d](https://github.com/Boehringer-Ingelheim/eslint-config/commit/059835d26311ea30a6dd5e837eb1a040dcad2b69))
* **shared-configurations:** [nextjs] ignore .next folder per default ([2f51caa](https://github.com/Boehringer-Ingelheim/eslint-config/commit/2f51caaf8b7ead38db9d753586f930ae91a8e3e5))
* **shared-configurations:** [react] remove redefined jsx-a11y plugin ([76e7fc4](https://github.com/Boehringer-Ingelheim/eslint-config/commit/76e7fc4f06caf252cc5bbcdbeb8fb4848c748e93))
* **shared-configurations:** make next.js configuration importable ([c6ca951](https://github.com/Boehringer-Ingelheim/eslint-config/commit/c6ca95150866af2c045a73b706ac3f034f34d7b6))


### Features

* add basic typing to the index.js ([ce3fbb0](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ce3fbb063150a162085df2f6e110460670612bb1))
* **base:** [typescript-eslint] update parserOptions to use projectService instead of project ([02ac930](https://github.com/Boehringer-Ingelheim/eslint-config/commit/02ac930eca6f1d9da4f2c724c1febebd9f3c2524))
* **deps:** update dependencies ([564b3ba](https://github.com/Boehringer-Ingelheim/eslint-config/commit/564b3ba9aec9ad1dbc80477438abfdfd82f69c6a))
* **deps:** update dependencies ([dfed600](https://github.com/Boehringer-Ingelheim/eslint-config/commit/dfed60091dfc8be82b1290841fbb864eda982762))
* migrates to flat-config ([b22a872](https://github.com/Boehringer-Ingelheim/eslint-config/commit/b22a872a1589516d571c8907e6ec30bb2b529f94))
* **naming-convention:** adds a new shared configuration for enforcing naming conventions ([8f2fdf2](https://github.com/Boehringer-Ingelheim/eslint-config/commit/8f2fdf2afee4aed0a26ab4f3a98d22627daefe5b))
* **shared-configurations:** [nextjs] enhance compatibility with react-refresh ([ba20ebd](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ba20ebdced704db40602aa25d270496c06d18d7d))
* **shared-configurations:** add next.js configuration ([ca94532](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ca9453226d898196c576073adc7af47869b551a4))


### BREAKING CHANGES

* migrate to flat config
* drop support for legacy config

# [7.0.0-next.10](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-next.9...v7.0.0-next.10) (2025-01-20)


### Bug Fixes

* **react:** [sort-jsx-props] use regex pattern for custom groups ([8625bbd](https://github.com/Boehringer-Ingelheim/eslint-config/commit/8625bbde24df50944fd661b70d50e2ae9cfe4217))

# [7.0.0-next.9](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-next.8...v7.0.0-next.9) (2025-01-17)


### Features

* **naming-convention:** adds a new shared configuration for enforcing naming conventions ([8f2fdf2](https://github.com/Boehringer-Ingelheim/eslint-config/commit/8f2fdf2afee4aed0a26ab4f3a98d22627daefe5b))

# [7.0.0-naming-convetion-configuration.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-naming-convetion-configuration.1...v7.0.0-naming-convetion-configuration.2) (2025-01-17)


### Bug Fixes

* **base:** turn off import/no-unused-modules for now ([a8f15dc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a8f15dc3a35fc6e6d774d8e766985772009862f0))
* publishes type declarations ([a410e8e](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a410e8eed04e5bde28eb6aa14be19858bb685cc9))

# [7.0.0-naming-convetion-configuration.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.1...v7.0.0-naming-convetion-configuration.1) (2025-01-17)


### Features

* **naming-convention:** adds a new shared configuration for enforcing naming conventions ([8f2fdf2](https://github.com/Boehringer-Ingelheim/eslint-config/commit/8f2fdf2afee4aed0a26ab4f3a98d22627daefe5b))

# [7.0.0-next.8](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-next.7...v7.0.0-next.8) (2025-01-17)


### Bug Fixes

* publishes type declarations ([a410e8e](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a410e8eed04e5bde28eb6aa14be19858bb685cc9))

# [7.0.0-next.7](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-next.6...v7.0.0-next.7) (2025-01-17)


### Bug Fixes

* **base:** turn off import/no-unused-modules for now ([a8f15dc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a8f15dc3a35fc6e6d774d8e766985772009862f0))

# [7.0.0-next.6](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-next.5...v7.0.0-next.6) (2025-01-15)


### Bug Fixes

* **react:** [sort-jsx-props] use regex pattern for custom groups ([720df19](https://github.com/Boehringer-Ingelheim/eslint-config/commit/720df196a0b6f1e0c480f95b7e6c6fa47e82bac0))


### Features

* **deps:** update dependencies ([564b3ba](https://github.com/Boehringer-Ingelheim/eslint-config/commit/564b3ba9aec9ad1dbc80477438abfdfd82f69c6a))

# [6.0.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.1...v6.0.2) (2025-01-15)


### Bug Fixes

* **react:** [sort-jsx-props] use regex pattern for custom groups ([8625bbd](https://github.com/Boehringer-Ingelheim/eslint-config/commit/8625bbde24df50944fd661b70d50e2ae9cfe4217))

# [7.0.0-next.5](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-next.4...v7.0.0-next.5) (2025-01-09)


### Bug Fixes

* **shared-configurations:** [nextjs] ignore .next folder per default ([2f51caa](https://github.com/Boehringer-Ingelheim/eslint-config/commit/2f51caaf8b7ead38db9d753586f930ae91a8e3e5))
* **shared-configurations:** [react] remove redefined jsx-a11y plugin ([76e7fc4](https://github.com/Boehringer-Ingelheim/eslint-config/commit/76e7fc4f06caf252cc5bbcdbeb8fb4848c748e93))
* **shared-configurations:** make next.js configuration importable ([c6ca951](https://github.com/Boehringer-Ingelheim/eslint-config/commit/c6ca95150866af2c045a73b706ac3f034f34d7b6))


### Features

* **shared-configurations:** [nextjs] enhance compatibility with react-refresh ([ba20ebd](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ba20ebdced704db40602aa25d270496c06d18d7d))
* **shared-configurations:** add next.js configuration ([ca94532](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ca9453226d898196c576073adc7af47869b551a4))

# [7.0.0-shared-configuration-nextjs.4](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-shared-configuration-nextjs.3...v7.0.0-shared-configuration-nextjs.4) (2025-01-08)


### Bug Fixes

* **shared-configurations:** [nextjs] ignore .next folder per default ([2f51caa](https://github.com/Boehringer-Ingelheim/eslint-config/commit/2f51caaf8b7ead38db9d753586f930ae91a8e3e5))

# [7.0.0-shared-configuration-nextjs.3](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-shared-configuration-nextjs.2...v7.0.0-shared-configuration-nextjs.3) (2025-01-08)


### Bug Fixes

* **shared-configurations:** [react] remove redefined jsx-a11y plugin ([76e7fc4](https://github.com/Boehringer-Ingelheim/eslint-config/commit/76e7fc4f06caf252cc5bbcdbeb8fb4848c748e93))


### Features

* **shared-configurations:** [nextjs] enhance compatibility with react-refresh ([ba20ebd](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ba20ebdced704db40602aa25d270496c06d18d7d))

# [7.0.0-shared-configuration-nextjs.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-shared-configuration-nextjs.1...v7.0.0-shared-configuration-nextjs.2) (2025-01-08)


### Bug Fixes

* **shared-configurations:** make next.js configuration importable ([c6ca951](https://github.com/Boehringer-Ingelheim/eslint-config/commit/c6ca95150866af2c045a73b706ac3f034f34d7b6))

# [7.0.0-shared-configuration-nextjs.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.1...v7.0.0-shared-configuration-nextjs.1) (2025-01-08)


### Bug Fixes

* **base:** switch some perfectionist references to flatconfig ([a6697cc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a6697cc2c6c11ff717732abe741d1300c6d3a608))
* **scripts:** [repair] use exact rimraf version to not use a local and possible incompatible version ([059835d](https://github.com/Boehringer-Ingelheim/eslint-config/commit/059835d26311ea30a6dd5e837eb1a040dcad2b69))


### Features

* add basic typing to the index.js ([ce3fbb0](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ce3fbb063150a162085df2f6e110460670612bb1))
* **base:** [typescript-eslint] update parserOptions to use projectService instead of project ([02ac930](https://github.com/Boehringer-Ingelheim/eslint-config/commit/02ac930eca6f1d9da4f2c724c1febebd9f3c2524))
* **deps:** update dependencies ([dfed600](https://github.com/Boehringer-Ingelheim/eslint-config/commit/dfed60091dfc8be82b1290841fbb864eda982762))
* migrates to flat-config ([b22a872](https://github.com/Boehringer-Ingelheim/eslint-config/commit/b22a872a1589516d571c8907e6ec30bb2b529f94))
* **shared-configurations:** add next.js configuration ([ca94532](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ca9453226d898196c576073adc7af47869b551a4))


### BREAKING CHANGES

* migrate to flat config
* drop support for legacy config

# [7.0.0-next.4](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-next.3...v7.0.0-next.4) (2025-01-08)


### Bug Fixes

* **scripts:** [repair] use exact rimraf version to not use a local and possible incompatible version ([059835d](https://github.com/Boehringer-Ingelheim/eslint-config/commit/059835d26311ea30a6dd5e837eb1a040dcad2b69))


### Features

* **deps:** update dependencies ([dfed600](https://github.com/Boehringer-Ingelheim/eslint-config/commit/dfed60091dfc8be82b1290841fbb864eda982762))

# [7.0.0-next.3](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-next.2...v7.0.0-next.3) (2025-01-08)


### Features

* **base:** [typescript-eslint] update parserOptions to use projectService instead of project ([02ac930](https://github.com/Boehringer-Ingelheim/eslint-config/commit/02ac930eca6f1d9da4f2c724c1febebd9f3c2524))

# [7.0.0-typescript-eslint-parser-options.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.1...v7.0.0-typescript-eslint-parser-options.1) (2025-01-07)


### Bug Fixes

* **base:** switch some perfectionist references to flatconfig ([a6697cc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a6697cc2c6c11ff717732abe741d1300c6d3a608))


### Features

* add basic typing to the index.js ([ce3fbb0](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ce3fbb063150a162085df2f6e110460670612bb1))
* **base:** [typescript-eslint] update parserOptions to use projectService instead of project ([02ac930](https://github.com/Boehringer-Ingelheim/eslint-config/commit/02ac930eca6f1d9da4f2c724c1febebd9f3c2524))
* migrates to flat-config ([b22a872](https://github.com/Boehringer-Ingelheim/eslint-config/commit/b22a872a1589516d571c8907e6ec30bb2b529f94))


### BREAKING CHANGES

* migrate to flat config
* drop support for legacy config

# [7.0.0-next.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v7.0.0-next.1...v7.0.0-next.2) (2024-12-20)


### Bug Fixes

* **base:** switch some perfectionist references to flatconfig ([a6697cc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a6697cc2c6c11ff717732abe741d1300c6d3a608))

# [7.0.0-next.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.1...v7.0.0-next.1) (2024-12-19)


### Features

* add basic typing to the index.js ([ce3fbb0](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ce3fbb063150a162085df2f6e110460670612bb1))
* migrates to flat-config ([b22a872](https://github.com/Boehringer-Ingelheim/eslint-config/commit/b22a872a1589516d571c8907e6ec30bb2b529f94))


### BREAKING CHANGES

* migrate to flat config
* drop support for legacy config

# [7.0.0-migrate-flat-config.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.1...v7.0.0-migrate-flat-config.1) (2024-12-18)


### Features

* add basic typing to the index.js ([ce3fbb0](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ce3fbb063150a162085df2f6e110460670612bb1))
* migrates to flat-config ([b22a872](https://github.com/Boehringer-Ingelheim/eslint-config/commit/b22a872a1589516d571c8907e6ec30bb2b529f94))


### BREAKING CHANGES

* migrate to flat config
* drop support for legacy config

# [6.0.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.0...v6.0.1) (2024-12-18)


### Bug Fixes

* **prettier-disable:** disable accidentally activated deprecated rule ([0ea3bfb](https://github.com/Boehringer-Ingelheim/eslint-config/commit/0ea3bfb76c327c67cdfd2d1b56f73258ca1654d9))

# [6.0.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v5.0.3...v6.0.0) (2024-12-18)


### Bug Fixes

* **prettier-disable:** add prettier-disable to npm release ([617691f](https://github.com/Boehringer-Ingelheim/eslint-config/commit/617691fdc9d6181bfd263c7884bd0a8ad070f4d2))
* remove eslint-plugin-deprecation as this is handled by sonarjs and typescript-eslint now ([931e781](https://github.com/Boehringer-Ingelheim/eslint-config/commit/931e7815f581ba6d8ed55346fbe77c7bfada487c))
* **typescript:** switch from eslint dot-notation to @typescript-eslint/do-notation ([0327e74](https://github.com/Boehringer-Ingelheim/eslint-config/commit/0327e74b727e7417ad595ae3d0ac674dcf930f0b))


### chore

* **deps:** update major release of eslint-plugin-perfectionist ([56b26af](https://github.com/Boehringer-Ingelheim/eslint-config/commit/56b26af104fd3a696774502fee964df64849beb5))
* **deps:** update majore release of typescript-eslint ([c929b6e](https://github.com/Boehringer-Ingelheim/eslint-config/commit/c929b6e17d07746c932185cf5d796e15711c6d64))


### Features

* **base:** add 'eslint-plugin-deprecation' to report usage of deprecated code ([00939c6](https://github.com/Boehringer-Ingelheim/eslint-config/commit/00939c646965d72a93b7716d610166ed90f3bd60))
* **deps:** update dependencies ([9166ce6](https://github.com/Boehringer-Ingelheim/eslint-config/commit/9166ce676ce982d4332309a0f441c9013533b502))
* **deps:** update eslint-plugin-perfectionist@3 ([1ca8eac](https://github.com/Boehringer-Ingelheim/eslint-config/commit/1ca8eacb1add6099f86b7abee1e7da7e5bad05a7))
* **deps:** update eslint-plugin-playwright to ^2.1.0 ([6f75084](https://github.com/Boehringer-Ingelheim/eslint-config/commit/6f750849246916b44032771f1ffa3a8afa2232c6))
* **deps:** update eslint-plugin-react-hooks to ^5.1.0 ([76cd621](https://github.com/Boehringer-Ingelheim/eslint-config/commit/76cd6214c3c6df2c34c6d61856322852d5782b47))
* **prettier-disable:** adds a prettier-disable shared config ([4e8000c](https://github.com/Boehringer-Ingelheim/eslint-config/commit/4e8000c543f629b6eb452181f230924c0b4e6f58))


### BREAKING CHANGES

* **deps:** major update for eslint-plugin-react-hooks to ^5.1.0
* **deps:** major update for eslint-plugin-playwright to ^2.1.0
* **deps:** update major release of typescript-eslint with new rules enabled
* **deps:** major update and rule changes of eslint perfectionist
* **base:** add 'eslint-plugin-deprecation' to base configuration
* **deps:** update to eslint-plugin-perfectionist@3

# [6.0.0-next.7](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.0-next.6...v6.0.0-next.7) (2024-12-17)


### Features

* **deps:** update eslint-plugin-playwright to ^2.1.0 ([6f75084](https://github.com/Boehringer-Ingelheim/eslint-config/commit/6f750849246916b44032771f1ffa3a8afa2232c6))
* **deps:** update eslint-plugin-react-hooks to ^5.1.0 ([76cd621](https://github.com/Boehringer-Ingelheim/eslint-config/commit/76cd6214c3c6df2c34c6d61856322852d5782b47))


### Reverts

* "chore(deps): update some major versions" ([28b4c17](https://github.com/Boehringer-Ingelheim/eslint-config/commit/28b4c178296b60ed97236be8fd9c19b0a25da17d))


### BREAKING CHANGES

* **deps:** major update for eslint-plugin-react-hooks to ^5.1.0
* **deps:** major update for eslint-plugin-playwright to ^2.1.0

# [6.0.0-next.6](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.0-next.5...v6.0.0-next.6) (2024-12-13)


### Bug Fixes

* remove eslint-plugin-deprecation as this is handled by sonarjs and typescript-eslint now ([931e781](https://github.com/Boehringer-Ingelheim/eslint-config/commit/931e7815f581ba6d8ed55346fbe77c7bfada487c))


### chore

* **deps:** update major release of eslint-plugin-perfectionist ([56b26af](https://github.com/Boehringer-Ingelheim/eslint-config/commit/56b26af104fd3a696774502fee964df64849beb5))
* **deps:** update majore release of typescript-eslint ([c929b6e](https://github.com/Boehringer-Ingelheim/eslint-config/commit/c929b6e17d07746c932185cf5d796e15711c6d64))
* **deps:** update some major versions ([bd583e3](https://github.com/Boehringer-Ingelheim/eslint-config/commit/bd583e33ae25adc18110ff57c7308963453d9626))


### BREAKING CHANGES

* **deps:** update major release of typescript-eslint with new rules enabled
* **deps:** major update and rule changes of eslint perfectionist
* **deps:** major updates for eslint-sonarjs with new rules enabled

# [6.0.0-next.5](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.0-next.4...v6.0.0-next.5) (2024-12-13)


### Bug Fixes

* **prettier-disable:** add prettier-disable to npm release ([617691f](https://github.com/Boehringer-Ingelheim/eslint-config/commit/617691fdc9d6181bfd263c7884bd0a8ad070f4d2))

# [6.0.0-next.4](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.0-next.3...v6.0.0-next.4) (2024-12-13)


### Features

* **prettier-disable:** adds a prettier-disable shared config ([4e8000c](https://github.com/Boehringer-Ingelheim/eslint-config/commit/4e8000c543f629b6eb452181f230924c0b4e6f58))

# [6.0.0-next.3](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.0-next.2...v6.0.0-next.3) (2024-09-16)


### Bug Fixes

* **typescript:** switch from eslint dot-notation to @typescript-eslint/do-notation ([0327e74](https://github.com/Boehringer-Ingelheim/eslint-config/commit/0327e74b727e7417ad595ae3d0ac674dcf930f0b))

# [6.0.0-next.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v6.0.0-next.1...v6.0.0-next.2) (2024-08-07)


### Features

* **deps:** update eslint-plugin-perfectionist@3 ([1ca8eac](https://github.com/Boehringer-Ingelheim/eslint-config/commit/1ca8eacb1add6099f86b7abee1e7da7e5bad05a7))


### BREAKING CHANGES

* **deps:** update to eslint-plugin-perfectionist@3

# [6.0.0-next.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v5.1.0-next.1...v6.0.0-next.1) (2024-08-07)


### Features

* **base:** add 'eslint-plugin-deprecation' to report usage of deprecated code ([00939c6](https://github.com/Boehringer-Ingelheim/eslint-config/commit/00939c646965d72a93b7716d610166ed90f3bd60))


### BREAKING CHANGES

* **base:** add 'eslint-plugin-deprecation' to base configuration

# [5.1.0-next.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v5.0.3...v5.1.0-next.1) (2024-07-24)


### Features

* **deps:** update dependencies ([9166ce6](https://github.com/Boehringer-Ingelheim/eslint-config/commit/9166ce676ce982d4332309a0f441c9013533b502))

## [5.0.3](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v5.0.2...v5.0.3) (2024-07-15)


### Bug Fixes

* fixes @typescript-eslint/restrict-template-expressions configuration ([9013d86](https://github.com/Boehringer-Ingelheim/eslint-config/commit/9013d86d66b2487f5e6c6787dc82a9ff06c9fc7e))

## [5.0.3-next.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v5.0.2...v5.0.3-next.1) (2024-07-15)


### Bug Fixes

* fixes @typescript-eslint/restrict-template-expressions configuration ([9013d86](https://github.com/Boehringer-Ingelheim/eslint-config/commit/9013d86d66b2487f5e6c6787dc82a9ff06c9fc7e))

## [5.0.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v5.0.1...v5.0.2) (2024-07-11)


### Bug Fixes

* allows number in string templates for @typescript-eslint/restrict-template-expressions ([2ba7e33](https://github.com/Boehringer-Ingelheim/eslint-config/commit/2ba7e3397a3f6b89cd7fd8e80ea4d7f2628bbe8c))

## [5.0.2-next.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v5.0.1...v5.0.2-next.1) (2024-07-11)


### Bug Fixes

* allows number in string templates for @typescript-eslint/restrict-template-expressions ([2ba7e33](https://github.com/Boehringer-Ingelheim/eslint-config/commit/2ba7e3397a3f6b89cd7fd8e80ea4d7f2628bbe8c))

## [5.0.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v5.0.0...v5.0.1) (2024-05-15)


### Bug Fixes

* **base:** [sonarjs] use recommended-legacy configuration ([baa1736](https://github.com/Boehringer-Ingelheim/eslint-config/commit/baa173616db5554babe303a1705c4eb1a6bd1385))

# [5.0.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v4.2.0...v5.0.0) (2024-05-13)


### Bug Fixes

* merge brought in unintentional downgrade ([39fc2ec](https://github.com/Boehringer-Ingelheim/eslint-config/commit/39fc2ec533edc47f6eeda77d83e4b71081728f43))


### Features

* added react-refresh to react config ([8a9c441](https://github.com/Boehringer-Ingelheim/eslint-config/commit/8a9c441b1119726462204fac46b1f11f9e647495))
* **perfectionist:** adapt the rule configuration to sort-intersection-types ([f2a2f94](https://github.com/Boehringer-Ingelheim/eslint-config/commit/f2a2f9468759b12029f35aa489fb8609dc35d697))
* update package typescript-eslint@7 ([b2990b5](https://github.com/Boehringer-Ingelheim/eslint-config/commit/b2990b5d9df75a612ffcdc454c037152884c19ca))
* update version ([cdfd4cc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/cdfd4cc841e53be7c69229ef0d2b4525f2488358))


### BREAKING CHANGES

* update to typescript-eslint@7

# [5.0.0-next.3](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v5.0.0-next.2...v5.0.0-next.3) (2024-04-25)


### Features

* **perfectionist:** adapt the rule configuration to sort-intersection-types ([f2a2f94](https://github.com/Boehringer-Ingelheim/eslint-config/commit/f2a2f9468759b12029f35aa489fb8609dc35d697))

# [5.0.0-next.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v5.0.0-next.1...v5.0.0-next.2) (2024-04-09)


### Bug Fixes

* merge brought in unintentional downgrade ([39fc2ec](https://github.com/Boehringer-Ingelheim/eslint-config/commit/39fc2ec533edc47f6eeda77d83e4b71081728f43))


### Features

* added react-refresh to react config ([8a9c441](https://github.com/Boehringer-Ingelheim/eslint-config/commit/8a9c441b1119726462204fac46b1f11f9e647495))
* update version ([cdfd4cc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/cdfd4cc841e53be7c69229ef0d2b4525f2488358))

# [5.0.0-next.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v4.2.0...v5.0.0-next.1) (2024-03-14)


### Features

* update package typescript-eslint@7 ([b2990b5](https://github.com/Boehringer-Ingelheim/eslint-config/commit/b2990b5d9df75a612ffcdc454c037152884c19ca))


### BREAKING CHANGES

* update to typescript-eslint@7

# [4.2.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v4.1.0...v4.2.0) (2024-03-14)


### Features

* updates ([a18892a](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a18892ae723a317d9bab4661a6d2b24483a0bb72))

# [4.1.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v4.0.1...v4.1.0) (2024-01-18)


### Features

* add reportUnusedDisableDirectives setting to base ([d73d2e6](https://github.com/Boehringer-Ingelheim/eslint-config/commit/d73d2e6f6c79c1094db18e56a92843f060a3eebe))

## [4.0.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v4.0.0...v4.0.1) (2023-11-16)


### Bug Fixes

* **perfectionist:** reenable recommended groups configuration of perfectionist/sort-classes ([8fa1e5b](https://github.com/Boehringer-Ingelheim/eslint-config/commit/8fa1e5b2a9cba29f05288d825d7dfe61539d00e4)), closes [#16](https://github.com/Boehringer-Ingelheim/eslint-config/issues/16)

# [4.0.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v3.0.0...v4.0.0) (2023-11-10)


### Bug Fixes

* fixes wrong type hints in base config and react config ([ef60c9f](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ef60c9f8c39eee91087b4e8a4bb0e7140d55e939))
* **perfectionist:**  update import groups configuration ([2513e42](https://github.com/Boehringer-Ingelheim/eslint-config/commit/2513e428957d7d97c20b08e26ba40af140f0c88a))
* **perfectionist:** natural sorting for imports and objects ([2dcb782](https://github.com/Boehringer-Ingelheim/eslint-config/commit/2dcb7821fa3d3ba0366e2938c768ee962dcd23ef))
* **perfectionist:** refine groups to sort imports ([9fd31cc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/9fd31cc33fd42861e99b7f7fe979bfb37a42f87e))


### Features

* **base:** move consistent type imports rules into strict configuration ([1c55d79](https://github.com/Boehringer-Ingelheim/eslint-config/commit/1c55d7939e6a74d4bb920edc9da780e87ee8e581))
* **local:** add shared-config for performance improvements for local development ([07dd315](https://github.com/Boehringer-Ingelheim/eslint-config/commit/07dd3158bbf02245f8d90b7e7f484be8e727fac3))
* **perfectionist:** extend all the rules for natural sorting with ignoring the lower/upper case ([03d7fdc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/03d7fdc346f6b5a521763ccca100612a4bf7ef06))
* **perfectionist:** extend rule `sort-named-imports` ([bb00813](https://github.com/Boehringer-Ingelheim/eslint-config/commit/bb008130ee5903bae626f1ef63f9e7e58e629d95))
* **typescript:** enable "@typescript-eslint/consistent-type-imports" rule ([15d5447](https://github.com/Boehringer-Ingelheim/eslint-config/commit/15d5447ee5fb3e4fc4ee2263e5e8eaff0e418308))


### Performance Improvements

* **base:** disable import rules recommended by typescript-eslint ([f35b2a8](https://github.com/Boehringer-Ingelheim/eslint-config/commit/f35b2a88ea619d00088574e7e3aa87f852980e31))


### BREAKING CHANGES

* **typescript:** Enforces a new import style for TypeScript types

# [4.0.0-next.4](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v4.0.0-next.3...v4.0.0-next.4) (2023-11-09)


### Bug Fixes

* fixes wrong type hints in base config and react config ([ef60c9f](https://github.com/Boehringer-Ingelheim/eslint-config/commit/ef60c9f8c39eee91087b4e8a4bb0e7140d55e939))

# [4.0.0-next.3](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v4.0.0-next.2...v4.0.0-next.3) (2023-11-09)


### Features

* **local:** add shared-config for performance improvements for local development ([07dd315](https://github.com/Boehringer-Ingelheim/eslint-config/commit/07dd3158bbf02245f8d90b7e7f484be8e727fac3))


### Performance Improvements

* **base:** disable import rules recommended by typescript-eslint ([f35b2a8](https://github.com/Boehringer-Ingelheim/eslint-config/commit/f35b2a88ea619d00088574e7e3aa87f852980e31))

# [4.0.0-next.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v4.0.0-next.1...v4.0.0-next.2) (2023-10-26)


### Features

* **base:** move consistent type imports rules into strict configuration ([1c55d79](https://github.com/Boehringer-Ingelheim/eslint-config/commit/1c55d7939e6a74d4bb920edc9da780e87ee8e581))

# [4.0.0-next.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v3.1.0-next.2...v4.0.0-next.1) (2023-10-19)


### Features

* **typescript:** enable "@typescript-eslint/consistent-type-imports" rule ([15d5447](https://github.com/Boehringer-Ingelheim/eslint-config/commit/15d5447ee5fb3e4fc4ee2263e5e8eaff0e418308))


### BREAKING CHANGES

* **typescript:** Enforces a new import style for TypeScript types

# [3.1.0-next.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v3.1.0-next.1...v3.1.0-next.2) (2023-10-16)


### Features

* **perfectionist:** extend rule `sort-named-imports` ([bb00813](https://github.com/Boehringer-Ingelheim/eslint-config/commit/bb008130ee5903bae626f1ef63f9e7e58e629d95))

# [3.1.0-next.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v3.0.0...v3.1.0-next.1) (2023-09-26)


### Bug Fixes

* **perfectionist:**  update import groups configuration ([2513e42](https://github.com/Boehringer-Ingelheim/eslint-config/commit/2513e428957d7d97c20b08e26ba40af140f0c88a))
* **perfectionist:** natural sorting for imports and objects ([2dcb782](https://github.com/Boehringer-Ingelheim/eslint-config/commit/2dcb7821fa3d3ba0366e2938c768ee962dcd23ef))
* **perfectionist:** refine groups to sort imports ([9fd31cc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/9fd31cc33fd42861e99b7f7fe979bfb37a42f87e))


### Features

* **perfectionist:** extend all the rules for natural sorting with ignoring the lower/upper case ([03d7fdc](https://github.com/Boehringer-Ingelheim/eslint-config/commit/03d7fdc346f6b5a521763ccca100612a4bf7ef06))

# [3.0.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v2.0.0...v3.0.0) (2023-09-13)


### Features

* add eslint-plugin-perfectionist ([92c629b](https://github.com/Boehringer-Ingelheim/eslint-config/commit/92c629bf8c11205e2204b598eb3c951546edd9af))
* update to eslint-plugin-perfectionist@2 ([5da0d2d](https://github.com/Boehringer-Ingelheim/eslint-config/commit/5da0d2dc1fb1c17c0da6230582d687dab60c019b))


### BREAKING CHANGES

* update to eslint-plugin-perfectionist@2
* add eslint-plugin-perfectionist and remove eslint-plugin-sort-keys-plus

# [2.0.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v1.1.4...v2.0.0) (2023-08-14)


### Features

* update to typescript-eslint@6 ([dc77acf](https://github.com/Boehringer-Ingelheim/eslint-config/commit/dc77acf4b8427ec36c8e42711abf86cf2ee73066))


### BREAKING CHANGES

* update to typescript-eslint@6

## [1.1.4](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v1.1.3...v1.1.4) (2023-06-01)


### Bug Fixes

* **eslint-plugin:** [import/no-unused-modules] ignore configuration files on `eslintrc` file level ([a50fdf2](https://github.com/Boehringer-Ingelheim/eslint-config/commit/a50fdf2447945babf08ede0c21fee971c1d42b22))

## [1.1.3](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v1.1.2...v1.1.3) (2023-04-19)


### Bug Fixes

* **eslint-plugin:** [parserOptions] improve monorepo support ([7e97ec0](https://github.com/Boehringer-Ingelheim/eslint-config/commit/7e97ec031f8df6018b17a9a6a5886f86f03b6df6))

## [1.1.2](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v1.1.1...v1.1.2) (2023-04-19)


### Bug Fixes

* **eslint-plugin:** [import/no-unused-modules] support CJS and ESM file extension on specified files ([4d872bf](https://github.com/Boehringer-Ingelheim/eslint-config/commit/4d872bf16e74ab94eec4911a6dc41b184d5bba06))

## [1.1.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v1.1.0...v1.1.1) (2023-03-07)


### Bug Fixes

* **eslint-plugin:** [import/no-unused-modules] ignore rule on specified files ([be03c76](https://github.com/Boehringer-Ingelheim/eslint-config/commit/be03c76474f15a6cb40392fd323d0a994f0daceb))

# [1.1.0](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v1.0.1...v1.1.0) (2023-03-01)


### Features

* **react:** disallow the use of TypeScript enums ([cd7fc5c](https://github.com/Boehringer-Ingelheim/eslint-config/commit/cd7fc5cd1d71d902e814c01b1e0dc8ed2dbd1710))

## [1.0.1](https://github.com/Boehringer-Ingelheim/eslint-config/compare/v1.0.0...v1.0.1) (2023-02-16)


### Bug Fixes

* **deps:** eslint rules not found ([f74af62](https://github.com/Boehringer-Ingelheim/eslint-config/commit/f74af62f8804e58baf90a4cc52450240af0c8d97))

# 1.0.0 (2023-02-07)


### Features

* initial version ([45c6ab6](https://github.com/Boehringer-Ingelheim/eslint-config/commit/45c6ab6d21d9f39ee205dd9c9ab87ae4befb5424))
