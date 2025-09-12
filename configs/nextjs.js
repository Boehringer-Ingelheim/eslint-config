const nextPlugin = require('@next/eslint-plugin-next');
const { defineConfig } = require('eslint/config');

const { NEXTJS_ROUTING_FILES } = require('../lib/nextjs.utils.js');
const react = require('./react.js');

module.exports = defineConfig(
  ...react,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    files: [`{app,src/app}/**/{${NEXTJS_ROUTING_FILES.join(',')}}.{ts,tsx}`],
    rules: {
      'import/no-unused-modules': ['off'],

      // eslint-plugin-react-refresh: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
      'react-refresh/only-export-components': [
        'warn',
        {
          allowExportNames: [
            /**
             * Next.js allows exporting the following options in pages, layouts and route handlers
             *
             * @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
             */
            'dynamic',
            'dynamicParams',
            'fetchCache',
            'maxDuration',
            'preferredRegion',
            'revalidate',
            'runtime',

            /**
             * Next.js allows exporting the following metadata options in layouts and pages
             *
             * @link https://nextjs.org/docs/app/api-reference/functions/generate-metadata
             */
            'generateMetadata',
            'metadata',

            /**
             * Next.js allows exporting the following static params functions in pages
             *
             * @link https://nextjs.org/docs/app/api-reference/functions/generate-static-params
             */
            'generateStaticParams',

            /**
             * Next.js allows exporting the following viewport options in layouts and pages
             *
             * @link https://nextjs.org/docs/app/api-reference/functions/generate-viewport
             */
            'generateViewport',
            'viewport',
          ],
        },
      ],
    },
  },
  {
    files: [`{middleware,src/middleware}.{ts,tsx}`],
    rules: {
      'import/no-unused-modules': ['off'],

      // eslint-plugin-react-refresh: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
      'react-refresh/only-export-components': [
        'warn',
        {
          allowExportNames: [
            /**
             * Next.js allows exporting the following config options in middleware
             *
             * @link https://nextjs.org/docs/app/api-reference/file-conventions/middleware#config-object-optional
             */
            'config',
          ],
        },
      ],
    },
  },
  {
    ignores: ['.next/*'],
  },
);
