// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
// import the entire module as a default, since @eslint/js is CJS
import jsPkg from '@eslint/js';
const { configs: jsConfigs } = jsPkg;

import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import securityPlugin from 'eslint-plugin-security';

const eslintRecommended = jsConfigs.recommended;
const securityRecommendedRules = securityPlugin.configs.recommended.rules;

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
  recommendedConfig: eslintRecommended
});

export default [
  {
    ignores: [
      'dist/**',
      'lib/**',
      'node_modules/**',
      '.storybook/**',
      'storybook-static/**'
    ]
  },
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended'
  ),
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      security: securityPlugin
    },

    settings: {
      react: { version: 'detect' },

      // 1) Tell import-plugin which parser handles TS files
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },

      // 2) Add the TS resolver
      'import/resolver': {
        // First try TypeScript’s own resolution (reads tsconfig.json, .d.ts, etc)
        typescript: {
          alwaysTryTypes: true, // <- this makes it pick up @types/ packages
          project: './tsconfig.json'
        },
        // Then fallback to Node’s standard resolution
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },

    rules: {
      'import/no-named-as-default-member': 'off',
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'react/react-in-jsx-scope': 'off',
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index']
          ],
          'newlines-between': 'always'
        }
      ],
      'max-len': ['warn', { code: 100, ignoreComments: true }],
      'no-console': ['warn', { allow: ['error'] }],
      ...securityRecommendedRules,
      'security/detect-object-injection': 'off'
    }
  }
];
