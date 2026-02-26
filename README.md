# ESLint Configuration

> ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline. - <https://eslint.org/>

This is the shared ESLint configuration used at [Boehringer Ingelheim](https://github.com/orgs/Boehringer-Ingelheim) for code styling.

[![npm version](https://img.shields.io/npm/v/@boehringer-ingelheim/eslint-config?style=for-the-badge)](https://www.npmjs.com/package/@boehringer-ingelheim/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@boehringer-ingelheim/eslint-config?style=for-the-badge)](https://www.npmjs.com/package/@boehringer-ingelheim/eslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://github.com/boehringer-ingelheim/eslint-config/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/boehringer-ingelheim/eslint-config/graphs/commit-activity)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-green.svg?logo=conventional-commits&style=for-the-badge)](https://conventionalcommits.org)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-494949?logo=semantic-release&style=for-the-badge)](https://github.com/semantic-release/semantic-release)

## Usage

### Install the package

```sh
npm install --save-dev @boehringer-ingelheim/eslint-config
```

### Add the configuration

Create or update the `eslint.config.mjs` file in your projects root directory accordingly.

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.configs.strict
)
```

#### Extend or Override configuration

This is not recommended as the goal is to have similar code stylings in all projects, but if for some reason you need to add or change the configuration, it is possible in the following way:

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.configs.strict, 
  {
    rules: {
      'no-empty-function': 'off',
    },
  }
);
```

#### `boehringer.includeIgnoreFile()`

The `includeIgnoreFile` function allows you to include `.gitignore` files in your ESLint configuration using a relative path.
This is an adjusted version of the same function from ESLint ([Ignore Files](https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-files)).
It is recommended to use this function to ensure that your `.gitignore` file is properly included in your ESLint setup.

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.includeIgnoreFile(), // default value '.gitignore'
  boehringer.configs.strict,
);
```

or in case you have a different paths to your `.gitignore` file(s):

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.includeIgnoreFile('./backend/.gitignore'),
  boehringer.includeIgnoreFile('./frontend/.gitignore'),
  boehringer.configs.strict,
);
```

More Information: [ESLint - Configuration Files](https://eslint.org/docs/latest/use/configure/configuration-files#extending-configuration-files)

### Run

```sh
npx eslint .
```

## Shared Configurations

Opinionated Options that differ from the standard/recommended ESLint configurations.

### Base

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.configs.base
)
```

This shared ESLint configuration is set up for TypeScript projects that adhere to modern JavaScript standards. It uses the latest version of TypeScript (ES2022) and extends several plugins and recommended rules to enforce best practices and catch potential errors.

The following plugins are used in this configuration:

- [`@typescript-eslint/eslint-plugin`](https://typescript-eslint.io/rules/)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [`eslint-plugin-sonarjs`](https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md)

Additionally, the [`eslint-plugin-perfectionist`](https://github.com/azat-io/eslint-plugin-perfectionist) is used to automatically fix sorting issues.

This configuration also sets up the TypeScript parser [`@typescript-eslint/parser`](https://typescript-eslint.io/packages/parser/) and [`eslint-import-resolver-typescript`](https://github.com/import-js/eslint-import-resolver-typescript).

### Local

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.configs.base,
  boehringer.configs.local
);
```

This shared ESLint configuration configures or disables some rules for a better performance locally. With the help of [`is-ci`](https://www.npmjs.com/package/is-ci) those configs only apply to environments outside the CI pipelines.

### Strict

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.configs.strict
);
```

This shared ESLint configuration extends the [base configuration](#base) and adds additional strict linting rules from the typescript-eslint plugin. These strict rules aim to enforce a high standard of code quality and improve code maintainability.

### React

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.configs.strict,
  boehringer.configs.react
);
```

This shared ESLint configuration is specifically tailored for [React](https://reactjs.org/) projects, and extends the [base configuration](#base). It uses the browser environment, and includes recommended configurations for the following plugins:

- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [`eslint-plugin-react-refresh`](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) (with rule severity `warn`)

The configuration sets several custom rules, including [`@typescript-eslint/no-restricted-types`](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-restricted-types.mdx) and [`@typescript-eslint/consistent-type-definitions`](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.mdx), as well as rules for organizing and formatting import statements.
Additionally in restricts the usage of enums using [`no-restricted-syntax`](https://github.com/eslint/eslint/blob/main/docs/src/rules/no-restricted-syntax.md).

### Next.js

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.configs.strict,
  boehringer.configs.nextjs
);
```

This shared ESLint configuration is specifically tailored for [Next.js](https://nextjs.org/) projects. It extends the [react configuration](#react) and includes the [`@next/eslint-plugin-next`](https://nextjs.org/docs/app/api-reference/config/eslint) plugin with the recommended and [`core-web-vital`](https://nextjs.org/docs/app/api-reference/config/eslint#with-core-web-vitals) rule set. The configuration also adapts the rule `react-refresh/only-export-components` to be compatible with Next.js.

### Playwright

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.configs.strict,
  boehringer.configs.playwright
);
```

or for specific files only:

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.configs.strict,
  {
    files: ['src/**/*.test.{ts,tsx}'],
    ...boehringer.configs.playwright[0],
  },
);
```

This shared ESLint configuration is designed to enforce best practices and recommendations when writing tests with Playwright. It extends the [`eslint-plugin-playwright`](https://github.com/playwright-community/eslint-plugin-playwright) configuration and adds the following rules:

- [`playwright/prefer-to-be`](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-be.md): enforces the use of `.toBe()` instead of `.toEqual()` when testing for equality.
- [`playwright/prefer-to-have-length`](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-length.md): enforces the use of `.toHaveLength()` instead of `.toEqual(n)` when testing the length of an object.
- [`playwright/require-top-level-describe`](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-top-level-describe.md): requires tests to be organized into top-level `describe()` blocks.

### (experimental) Naming Convention

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.configs.strict,
  // possibly other configs,
  boehringer.configs.experimentalNamingConvention
);
```

This shared ESLint configuration is designed to enforce some naming conventions. It uses the [`@typescript-eslint/naming-convention`](https://typescript-eslint.io/rules/naming-convention/) rule for enforcing the naming conventions. The enforced conventions can be found in [configs/experimental-naming-convention.js](./configs/experimental-naming-convention.js#L7-L65)

### Prettier-disable

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import prettier from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  boehringer.configs.strict,
  // Following needs eslint-plugin-prettier to be installed as described by https://github.com/prettier/eslint-plugin-prettier
  // Should be second to last
  prettier,
  // Should be last
  boehringer.configs.prettierDisable,
);
```

This shared ESLint configuration is wrapper around [`eslint-config-disable`](https://github.com/prettier/eslint-config-prettier), which is used to turn off all rules that are unnecessary or might conflict with Prettier. This wrapper reenables a few rules that can be used with our shared configurations as we are using specific options of those rules which are compatible with Prettier (see [Special Rules](https://github.com/prettier/eslint-config-prettier#special-rules)). Following rules are reenabled:

- [`curly`](https://github.com/eslint/eslint/blob/main/docs/src/rules/curly.md) with the (default) option "all": Enforce consistent brace style for all control statements
- [`no-confusing-arrow`](https://github.com/eslint/eslint/blob/main/docs/src/rules/no-confusing-arrow.md) with allowParens `false` and onlyOneSimpleParam `true`: Disallow arrow functions where they could be confused with comparisons.

## Known issues

### Parsing error

ESLint may throw one of the following errors for some files (even for its own eslint.config.js):

- `ESLint was configured to run ... However, that TSConfig does not / none of those TSConfigs include this file`.
- `... was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject`

This error is caused by including the respective file in the scope of ESLint but not in the scope of TypeScript. For more information about this error and more suggestions how to solve it you can check the [troubleshooting of typescript-eslint](https://typescript-eslint.io/troubleshooting/typed-linting/#i-get-errors-telling-me--was-not-found-by-the-project-service-consider-either-including-it-in-the-tsconfigjson-or-including-it-in-allowdefaultproject).

Our recommendation is to keep type-aware linting of those files.

#### Solution 1

Include the .(c|m)?js files in your main tsconfig.json:

```jsonc
{
  "include": [
    // your existing includes
    "*.*js", // this will include all .js, .cjs, .mjs files and similar in your project root
    "*.ts", // this will include all .ts files and similar in your project root
    // Add all other files/folders in which this error occurs
  ]
}
```

#### Solution 2

You can use the new [`allowDefaultProject`](https://typescript-eslint.io/packages/parser#allowdefaultproject) option, which works perfectly with our [`projectService` configuration](./configs/base.js#L25):

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  // other configs,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            '*.*js', 
            '.*.*js',
          ],
          // defaultProject can be used to specify separate tsconfig options for "out-of-project" files included by allowDefaultProject
          // defaultProject: 'tsconfig.eslint.json',
        },
      },
    },
  },
)
```

## Local Development

### Install Dependencies

```sh
npm install
```

### Test

```sh
npm test
```

### Repair

This command may be useful when obscure errors or issues are encountered. It removes and recreates dependencies of your project.

```sh
npm run repair
```

### Release

> [!IMPORTANT]  
> Manual releases are not supported to ensure consistency and security, see: <https://docs.npmjs.com/trusted-publishers>

Releases are automated through GitHub Actions using [semantic-release](https://github.com/semantic-release).
It bumps the version according to conventional commits, publishes the package to npm and release a new version to GitHub.

```sh
npm run release
```

## Roadmap

- [ ] Shared configuration: Angular
- [ ] Shared configuration: Node.js
- [ ] Test Cases
- [x] "[Flat](https://eslint.org/docs/latest/use/configure/configuration-files-new)" Config

## Show your support

Give a ⭐️ if this project helped you!

## License

Copyright © 2026 [Boehringer Ingelheim](https://github.com/boehringer-ingelheim).  
This project is [MIT](https://github.com/boehringer-ingelheim/eslint-config/blob/master/LICENSE) licensed.

## Resources

- <https://eslint.org/>
- <https://typescript-eslint.io/>
- <https://react-typescript-cheatsheet.netlify.app/>
- <https://prettier.io/>
- <https://conventionalcommits.org/en/v1.0.0/>
- <https://semantic-release.gitbook.io/>
- <https://semver.org/>
