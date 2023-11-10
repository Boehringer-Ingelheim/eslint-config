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
