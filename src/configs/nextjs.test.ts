import { describe, expect, it } from 'vitest';
import { collectPlugins, resolveRulesForFile } from '../__tests__/helpers.js';
import nextjs from './nextjs.js';

/**
 * The route-file globs and per-override `allowExportNames` lists are covered
 * by the per-path snapshots below — `app/page.tsx`, `app/api/users/route.ts`,
 * `middleware.ts`, `proxy.ts`, and `instrumentation.ts` each exercise a
 * different override entry. Plugin registration is the only structural fact
 * not visible in the snapshots.
 */
describe('configs/nextjs', () => {
  const plugins = collectPlugins(nextjs);

  it('registers the @next/next plugin', () => {
    expect(plugins.has('@next/next')).toBe(true);
  });

  it.each([
    ['regular component', 'src/components/Foo.tsx'],
    ['app directory page', 'app/page.tsx'],
    ['app directory layout (src variant)', 'src/app/layout.tsx'],
    ['app directory route handler', 'app/api/users/route.ts'],
    ['root middleware', 'middleware.ts'],
    ['root proxy', 'proxy.ts'],
    ['root instrumentation', 'instrumentation.ts'],
  ])('resolved rules snapshot for %s (%s)', async (_label, filename) => {
    const resolved = await resolveRulesForFile({ config: nextjs, filename });
    expect(resolved).toMatchSnapshot();
  });
});
