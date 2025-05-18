// eslint.config.cjs

// 1) FlatCompat helper
const { FlatCompat } = require('@eslint/eslintrc');

// 2) Pull in ESLint’s own “recommended” config object
const { configs } = require('@eslint/js');
const eslintRecommended = configs.recommended;

// 3) Your plugins
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');   

const reactPlugin = require('eslint-plugin-react');

// 4) Create compat, passing the actual config object
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintRecommended
});

// 5) Export the flat‐array config
module.exports = [
  // A) ignore generated/output folders
  {
    ignores: [
      'dist/**',
      'lib/**',
      'node_modules/**',
      '.storybook/**',
      'storybook-static/**'
    ]
  },

  // B) plugin-recommended rules (TS + React + Storybook if you like)
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended'
  ),

  // C) per-file settings: parser must be the module!
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
      react: reactPlugin
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': ['warn', { allow: ['error'] }],
      'react/react-in-jsx-scope': 'off'
    }
  }
];