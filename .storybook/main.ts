// .storybook/main.js

import path from 'path';
import { mergeConfig } from 'vite';

module.exports = {
  // 1. Tell Storybook where to find your stories:
  stories: ['../src/components/**/*.@(mdx|stories.@(ts|tsx|js|jsx))'],

  // 2. Load the addons you need:
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook'
  ],

  // 3. Use the React-Vite integration instead of the old React framework:
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  // 4. (Optional) If you need to customize Vite itself:
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: { '@': path.resolve(__dirname, '../src') }
      }
    });},
  
  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};