module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: ['standard', 'plugin:json/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
        jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
    rules: {
        'comma-dangle': 'off',
        'no-empty': 'error',
        'no-var': 'error',
        'no-extra-semi': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'eqeqeq': 'error',
        'quotes': ['error', 'single', 'avoid-escape'],
        'no-extra-parens': ['error', 'all'],
  }
};
