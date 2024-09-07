import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ['**/build/', '**/.next/', '**/out/'],
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      eqeqeq: 'error',
      camelcase: ['error', { ignoreImports: true }],
      'default-case': 'error',
      'default-case-last': 'error',
      'arrow-body-style': ['error', 'always'],
      'block-scoped-var': 'error',
      curly: 'error',
      'init-declarations': ['error', 'always'],
      'vars-on-top': 'error',
      'require-await': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'no-empty': 'error',
      'no-else-return': 'error',
      'no-console': 'warn',
      'no-alert': 'error',
      'no-inline-comments': 'error',
      'no-empty-function': 'error',
      'no-var': 'error',
      'no-undef-init': 'error',
      'no-with': 'error',
      'no-self-compare': 'error',
      'no-duplicate-imports': 'error',
      'no-constructor-return': 'error',
      'no-unused-expressions': 'error',
    },
  },
];
