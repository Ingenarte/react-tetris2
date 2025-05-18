// eslint.config.cjs

// 1) Compat helper
const { FlatCompat } = require('@eslint/eslintrc');

// 2) ESLint’s official recommended config now lives in @eslint/js
const { configs: { recommended: eslintRecommended } } = require('@eslint/js');

// 3) Your plugins
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');

// 4) Create compat, passing the actual object
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintRecommended
});

// 5) Export your flat array
module.exports = [
  // A) Ignore build/storybook output
  {
    ignores: [
      'dist/**',
      'lib/**',
      'node_modules/**',
      '.storybook/**',
      'storybook-static/**'
    ]
  },

  // B) Pull in TypeScript & React plugin rules (on top of "eslint:recommended")
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ),

  // C) Per-file customization (parser, rules, etc.)
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin
    },
    settings: { react: { version: 'detect' } },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': ['warn', { allow: ['error'] }],
      'react/react-in-jsx-scope': 'off'
    }
  }
];