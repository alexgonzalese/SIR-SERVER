module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true,
  },
  extends: ['airbnb-base'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreGlobals: true,
        ignoreImports: false,
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 2 }],
    'function-paren-newline': ['error', 'multiline'],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: false,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
    ],
  },
};
