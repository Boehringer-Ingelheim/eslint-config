import { Config } from 'typescript-eslint';

type Configs =
  | 'base'
  | 'experimentalNamingConvention'
  | 'local'
  | 'nextjs'
  | 'playwright'
  | 'prettierDisable'
  | 'react'
  | 'strict';

declare module './index' {
  const config: typeof import('typescript-eslint').config;
  const configs: Record<Configs, Config>;

  export { config, configs };
}
