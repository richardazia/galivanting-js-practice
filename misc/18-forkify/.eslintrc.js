module.exports = {
  env: {
    es6: true
  },
  rules: {
    'strict': ['error', 'global'],
    'no-var': 'error', 
    'prefer-const': 'error',
    'one-var': ['error', 'never'],
    'camelcase': 'error', 
    'no-unused-vars': 'error',
    'no-whitespace-before-property': "error",
    'no-multi-assign': 'error',

    "semi": ["error", "always"],
    "quotes": ['error', 'single'],
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'quote-props': ['error', 'as-needed'],



  },
};
