import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    environment: 'node',
    globals: false,
    include: ['src/**/*.test.ts'],
    snapshotFormat: {
      printBasicPrototype: false,
    },
  },
});
