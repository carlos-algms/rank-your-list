module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'amd': true,
    'mocha': true,
    'jasmine': true,
    'protractor': true
  },
  'extends': 'airbnb',
  'globals': {
    'sinon': true,
    'inject': true,
    'should': true,
    'waitElementVisible': true,
    'componentHandler': true
  },

  'parserOptions': {
    'ecmaVersion': 6
  },

  "parser": "babel-eslint",

  'rules': {
    'strict': 0,
    'comma-dangle': 0,
    'no-use-before-define': ['error', { 'functions': false, 'classes': true }],
    'no-console': ['error', { 'allow': ['warn', 'error', 'info', 'debug'] }],
    'no-param-reassign': ['error', { 'props': false }],
    'radix': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': 0
  }
};
