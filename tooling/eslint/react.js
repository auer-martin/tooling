import pluginQuery from '@tanstack/eslint-plugin-query';
import pluginRouter from '@tanstack/eslint-plugin-router';
import pluginReact from 'eslint-plugin-react';
import pluginHooks from 'eslint-plugin-react-hooks';

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  ...pluginQuery.configs['flat/recommended'],
  ...pluginRouter.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: pluginReact,
      'react-hooks': pluginHooks,
    },
    rules: {
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginHooks.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        React: 'writable',
      },
    },
  },
];
