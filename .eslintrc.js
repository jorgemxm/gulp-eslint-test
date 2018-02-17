module.exports = {
  env: {
    'browser': true,
    'node': true,
    'es6': true
  },

  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module"
  },

  extends: [
    // 'eslint:recommended',
    'airbnb-base', // https://github.com/airbnb/javascript
  ],

  /**
  * ERROR Level: Severity should be one of the following:
  *  0 = off  |  1 = warn  |  2 = error
  */
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 2 }], // Added so gulp-eslint fixes indentation when is initialized
    'no-console': 'off',
    'no-debugger': 'warn',
    'no-trailing-spaces': 'error', // disallow trailing whitespace at the end of lines
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
    'no-var': 'error', // ES6: This rule is aimed at discouraging the use of var and encouraging the use of const or let instead.
  },

  globals: {
    'YT': true
  }
}
