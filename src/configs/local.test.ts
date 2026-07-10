import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { collectRules } from '../__tests__/helpers.js';

describe('configs/local', () => {
  afterEach(() => {
    vi.doUnmock('is-ci');
    vi.resetModules();
  });

  describe('outside CI', () => {
    beforeEach(() => {
      vi.doMock('is-ci', () => ({ default: false }));
      vi.resetModules();
    });

    it('disables performance-heavy import rules', async () => {
      const local = (await import('./local.js')).default;
      const rules = collectRules(local);
      expect(rules['import-x/no-cycle']).toBe('off');
      expect(rules['import-x/no-deprecated']).toBe('off');
      expect(rules['import-x/no-named-as-default']).toBe('off');
      expect(rules['import-x/no-unused-modules']).toBe('off');
    });
  });

  describe('inside CI', () => {
    beforeEach(() => {
      vi.doMock('is-ci', () => ({ default: true }));
      vi.resetModules();
    });

    it('does not disable any rules', async () => {
      const local = (await import('./local.js')).default;
      const rules = collectRules(local);
      expect(Object.keys(rules)).toHaveLength(0);
    });
  });
});
