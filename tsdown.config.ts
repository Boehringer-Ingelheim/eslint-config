import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/main.ts'],
  format: ['cjs', 'esm'],
  unbundle: true,
});
