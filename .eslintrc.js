module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    // I disagree
    'react/jsx-filename-extension': 'off',
    // I disagree
    'react/require-default-props': 'off',
    // Our babel config doesn't support class properties
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/label-has-for': ['error', {
      components: [],
      required: {
        some: ['nesting', 'id'],
      },
      allowChildren: false,
    }],
  },
};
