module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    browser: true,
    jest: true,
    node: true,
    es2020: true
  },
  overrides: [
    {
      // Config for typescript files
      files: ['**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off', // false positives. fixed by experimental rule
        '@typescript-eslint/no-unused-vars-experimental': ['error'],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type']
      }
    },
    {
      // Causing false positives in the resolver files, see: https://github.com/typescript-eslint/typescript-eslint/issues/2183
      files: ['src/resolvers/*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    },
    {
      // Config for application - disallow console.logs in the app code (allowed in scripts etc.)
      files: ['src/**/*'],
      rules: {
        'no-console': 'error'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    // Rules for all files
    'arrow-parens': ['error', 'always'],
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'no-unreachable': 'warn',
    semi: [2, 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
};
