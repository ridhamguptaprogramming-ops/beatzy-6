import js from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.next/**', '**/coverage/**'],
  },

  js.configs.recommended,

  // TypeScript for Node apps
  {
    files: ['apps/api/src/**/*.{ts,tsx}', 'packages/shared/src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        // Keep this compatible with the flat-config runtime
        projectService: false,
        ecmaVersion: 'latest',
      },
      globals: {
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-undef': 'off',
    },
  },

  // TypeScript for Next.js web app
  {
    files: ['apps/web/src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: false,
        ecmaVersion: 'latest',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
];

