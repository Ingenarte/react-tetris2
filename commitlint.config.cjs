// commitlint.config.cjs
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // you can customize or add rules here if you like
    'header-max-length': [2, 'always', 100]
  }
};