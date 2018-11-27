module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    '@evermind/eslint-config-base',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    // next avoids this
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'no-invalid-this': 0,
  },
};
