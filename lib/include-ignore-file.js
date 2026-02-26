import { includeIgnoreFile as includeIgnoreFileAbsolute } from '@eslint/compat';
import path from 'node:path';
import { cwd } from 'node:process';

/**
 * Reads an ignore file (e.g. `.gitignore`) and returns an object with the ignore patterns.
 *
 * @param {string} [ignoreFilePath='.gitignore'] - The path to the ignore file. Defaults to `.gitignore`.
 * @throws {TypeError} If the provided path is not a string.
 * @throws {Error} If the provided path is an empty string.
 * @returns {import('@eslint/compat').FlatConfig} The result of including the ignore file at the resolved absolute path.
 */
export const includeIgnoreFile = (ignoreFilePath = '.gitignore') => {
  if (typeof ignoreFilePath !== 'string') {
    throw new TypeError('Expected a string');
  }

  if (ignoreFilePath === '') {
    throw new Error('Expected a non-empty string');
  }

  const absolutePath = path.resolve(cwd(), ignoreFilePath);
  return includeIgnoreFileAbsolute(absolutePath);
};
