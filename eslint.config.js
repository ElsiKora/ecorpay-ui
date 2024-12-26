import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginPrettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginPrettier.rules,
    },
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: pluginReact.configs.recommended,
    },
  },
  { ignores: ['node_modules', 'dist', 'storybook-static', '.husky'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginPrettier,
];
