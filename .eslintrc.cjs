module.exports = {
  plugins: ['solid', 'astro'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: 'love',
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    },
    {
      extends: [
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended'
      ],
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      processor: 'astro/client-side-ts',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'astro/no-set-html-directive': 'error',
        'astro/no-set-text-directive': 'warn',
        'astro/jsx-a11y/no-autofocus': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
}
