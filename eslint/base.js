/// <reference types="./types.d.ts" />
import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import drizzlePlugin from 'eslint-plugin-drizzle';
import importPlugin from 'eslint-plugin-import';
import pluginNode from 'eslint-plugin-n';
import turboPlugin from 'eslint-plugin-turbo';
import unicornPlugin from 'eslint-plugin-unicorn';
import globals from 'globals';
import fs from 'node:fs';
import path from 'node:path';
import tseslint from 'typescript-eslint';

const GLOB_INCLUDE = ['**/*.{js,svelte,ts,tsx,vue}'];
const GLOB_EXCLUDE = ['app/routeTree.gen.ts', '**/*.config.*'];

const findFirstGitignore = () => {
  const options = [
    path.join(import.meta.dirname, '.gitignore'),
    path.join(import.meta.dirname, '../.gitignore'),
    path.join(import.meta.dirname, '../../.gitignore'),
    path.join(import.meta.dirname, '../../../.gitignore'),
  ];

  return options.find(option => fs.existsSync(option));
};

const gitIgnore = findFirstGitignore();

/**
 * All packages that leverage t3-env should use this rule
 */
export const restrictEnvAccess = tseslint.config(
  { ignores: ['**/env.ts'] },
  gitIgnore ? includeIgnoreFile(gitIgnore) : {},
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    rules: {
      'no-restricted-properties': [
        'error',
        {
          object: 'process',
          property: 'env',
          message:
            "Use `import { env } from '~/env'` instead to ensure validated types.",
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          name: 'process',
          importNames: ['env'],
          message:
            "Use `import { env } from '~/env'` instead to ensure validated types.",
        },
      ],
    },
  }
);

export default tseslint.config(
  // Ignore files not tracked by VCS and any config files
  // THIS IS NOT WORKING FOR CONSUMERS
  // includeIgnoreFile(path.join(import.meta.dirname, '../.gitignore')),
  {
    name: '@ausweis/ignores',
    ignores: GLOB_EXCLUDE,
  },
  {
    name: '@ausweis/setup',
    files: [GLOB_INCLUDE],
    plugins: {
      import: importPlugin,
      unicorn: unicornPlugin,
      turbo: turboPlugin,
      drizzle: drizzlePlugin,
      // @ts-expect-error
      '@stylistic/js': stylisticJs,
      '@typescript-eslint': tseslint.plugin,
      node: pluginNode,
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      ...turboPlugin.configs.recommended.rules,
      ...drizzlePlugin.configs.recommended.rules,
      '@typescript-eslint/no-namespace': ['off', {}],
      'drizzle/enforce-delete-with-where': [
        'error',
        { drizzleObjectName: 'db' },
      ],
      'drizzle/enforce-update-with-where': [
        'error',
        { drizzleObjectName: 'db' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-misused-promises': [
        2,
        { checksVoidReturn: { attributes: false } },
      ],
      '@typescript-eslint/no-non-null-assertion': 'error',
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        extraFileExtensions: ['.svelte', '.vue'],
        parser: tseslint.parser,
      },
      globals: {
        ...globals.browser,
      },
    },
  }
);
