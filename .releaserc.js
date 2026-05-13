/** @type {import('semantic-release').Options}  */
export default {
  branches: [
    'master',
    {
      name: 'next',
      prerelease: true,
    },
    {
      channel: '${name.replace(/^feature\\//g, "").replace(/\\/-/g, "")}',
      name: 'feature/**',
      prerelease: '${name.replace(/^feature\\//g, "").replace(/\\/-/g, "")}',
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};
