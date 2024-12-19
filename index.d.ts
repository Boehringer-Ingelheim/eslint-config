import { Config } from 'typescript-eslint';

type Configs = 'base' | 'local' | 'playwright' | 'prettier-disable' | 'react' | 'strict';

declare module './index' {
  const config: typeof import('typescript-eslint').config;
  const configs: Record<Configs, Config>;

  export { config, configs };
}
