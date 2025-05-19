// eslint.config.cjs

// 1) FlatCompat helper
const { FlatCompat } = require('@eslint/eslintrc');

// 2) ESLint’s built-in “eslint:recommended” from @eslint/js
const { configs } = require('@eslint/js');
const eslintRecommended = configs.recommended;

// 3) Plugins & parser
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const importPlugin = require('eslint-plugin-import');
const prettierPlugin = require('eslint-plugin-prettier');
const securityPlugin = require('eslint-plugin-security');

// 4) Grab security-recommended rules
const securityRecommended = securityPlugin.configs.recommended.rules;

// 5) Create compat
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintRecommended
});

// 6) Export flat config
module.exports = [
  // A) ignores
  {
    ignores: [
      'dist/**',
      'lib/**',
      'node_modules/**',
      '.storybook/**',
      'storybook-static/**'
    ]
  },

  // B) extends (excluding security because it contains unsupported top-level props)
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended'
  ),

  // C) per-file overrides
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
      security: securityPlugin,
      prettier: prettierPlugin
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          // optional: if your tsconfig is in a nonstandard location:
          // project: "./tsconfig.json"
        }
      }
    },
    rules: {
      // 1) Prettier
      'prettier/prettier': 'error',

      // 2) TypeScript
      '@typescript-eslint/no-explicit-any': 'error',

      // 3) React
      'react/react-in-jsx-scope': 'off',

      // 4) Import order
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

      // 5) Max line length
      'max-len': ['warn', { code: 100, ignoreComments: true }],

      // 6) Console
      'no-console': ['warn', { allow: ['error'] }],

      // 7) Security plugin rules
      ...securityRecommended,
      // disable the noisy one
      'security/detect-object-injection': 'off'
    }
  }
];
