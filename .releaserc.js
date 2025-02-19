/** @type {import('semantic-release').Options}  */
module.exports = {
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
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'README.md', 'package.json', 'package-lock.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};
