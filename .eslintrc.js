module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jest: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'linebreak-style': ['error', 'windows'],
    'arrow-body-style': ['error', 'always']
  }
};
