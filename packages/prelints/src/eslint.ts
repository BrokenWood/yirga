/* eslint-disable import/no-extraneous-dependencies */
import { ParserOptions } from '@typescript-eslint/parser';

const parserOptions: ParserOptions = {
  sourceType: 'module',
  project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 2020,
};

const defaultConfig = {
  root: true,
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'airbnb-typescript', // react, ts
    'plugin:@typescript-eslint/recommended',
    // https://www.npmjs.com/package/eslint-config-prettier
    'prettier', // 关闭与 prettier 冲突的rules
    'prettier/@typescript-eslint', // 关闭与 @typescript-eslint/eslint-plugin 冲突的rules
    'prettier/react', // 关闭与 eslint-plugin-react 冲突的rules
  ],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    strict: [0],
    'no-sequences': [0],
    'no-mixed-operators': [0],
    'react/react-in-jsx-scope': [0],
    'no-useless-escape': [0],
    'react/jsx-props-no-spreading': 0, // 传入 props时 不可使用解构
    'react/state-in-constructor': 0,
    'brace-style': [0],
    'no-console': [1],
    'guard-for-in': [0],
    'generator-star-spacing': [0],
    'consistent-return': [0],
    'react-hooks/rules-of-hooks': [2],
    // issue https://github.com/facebook/react/issues/15204
    'react-hooks/exhaustive-deps': 'off', // 对依赖限制太死暂时不使用
    'react/forbid-prop-types': [0],
    'global-require': [1],
    'import/prefer-default-export': 'off',
    'import/no-default-export': [0, 'camel-case'],
    'import/no-extraneous-dependencies': [2],
    'import/no-named-as-default-member': 1,
    'import/no-named-as-default': 1,
    'import/no-unresolved': 2,
    'import/no-cycle': 0,
    'import/extensions': 0,
    'react/jsx-no-bind': [0],
    'react/no-access-state-in-setstate': 1,
    'react/jsx-filename-extension': 'off',
    'react/prop-types': [0],
    'react/sort-comp': 1,
    'react/prefer-stateless-function': [0],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
      },
    ],
    'react/destructuring-assignment': 'off', // 有时无法使用解构，且会主动改变逻辑解构
    'react/static-property-placement': 'off',
    'no-prototype-builtins': 'off',
    'no-else-return': [0],
    'no-restricted-syntax': [0],
    'no-underscore-dangle': [0],
    'prefer-destructuring': 1, // 有的时候你确实没法解构
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['label'],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    'no-nested-ternary': [0],
    'arrow-body-style': [0],

    'no-bitwise': [0],
    'no-cond-assign': [0],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'object-curly-newline': [0],
    'function-paren-newline': [0],
    'no-restricted-globals': [0],
    'require-yield': [1],
    // 'compat/compat': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    camelcase: 0,
  },
  parserOptions,
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = defaultConfig;
