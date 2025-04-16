import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['_output/**'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
      indent: ['error', 2],
      curly: 'error',
      'react-refresh/only-export-components': 'off',
      'no-trailing-spaces': 'error',
      'brace-style': 'error',
      'no-multi-spaces': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'no-whitespace-before-property': 'error',
      'func-call-spacing': 'error',
      'space-before-blocks': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'comma-dangle': ['error', 'always-multiline'],
      'space-in-parens': ['error', 'never'],
      'block-spacing': 'error',
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'key-spacing': ['error', { mode: 'strict' }],
      'arrow-spacing': ['error', { before: true, after: true }],
    },
  },
)
