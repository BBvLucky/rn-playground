module.exports = {
  root: true,
  extends: '@react-native',

  plugins: ['unused-imports', 'simple-import-sort'],

  rules: {
    'simple-import-sort/imports': 'error',
    'prefer-const': 'error',
    'no-console': ['warn', {allow: ['warn', 'error']}],
    'object-shorthand': 'warn',
  },

  overrides: [
    {
      files: ['.eslintrc.js', 'babel.config.js', 'metro.config.js'],
      parserOptions: {
        requireConfigFile: false,
      },
    },
  ],
};
