const nextPlugin = require('@next/eslint-plugin-next');
const tseslint = require('typescript-eslint');

const react = require('./react.js');

module.exports = tseslint.config(
  ...react,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      // eslint-plugin-react-refresh: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
      'react-refresh/only-export-components': [
        'warn',
        {
          /**
           * Next.js allows exporting the following options in pages, layouts and route handlers
           *
           * @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
           */
          allowExportNames: [
            'config',
            'dynamic',
            'dynamicParams',
            'fetchCache',
            'generateMetadata',
            'generateStaticParams',
            'generateViewport',
            'maxDuration',
            'metadata',
            'preferredRegion',
            'revalidate',
            'runtime',
            'viewport',
          ],
        },
      ],
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    ignores: ['.next/*'],
  },
);
