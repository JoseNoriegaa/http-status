module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'no-console': 'off',
    'no-plusplus': [
      2,
      { allowForLoopAfterthoughts: true },
    ],
    'arrow-parens': [
      2,
      'as-needed',
      { requireForBlockBody: true },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    semi: [
      'error',
      'always',
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 2,
      },
    ],
    'array-bracket-newline': [
      'error',
      { multiline: true, minItems: 3 },
    ],
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        minProperties: 3,
      },
    ],
  },
};
