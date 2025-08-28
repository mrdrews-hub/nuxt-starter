// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      formatters: true,
      stylistic: true,
      rules: {
        'style/eol-last': 'off',
        'no-console': 'warn',
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': 'warn',
        'unicorn/throw-new-error': 'off',
      },
    },
  ),
)
