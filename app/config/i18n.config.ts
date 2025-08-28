/* eslint-disable node/prefer-global/process */
import type { NuxtConfig } from 'nuxt/config'

export const NuxtI18nConfig: NuxtConfig['i18n'] = {
  locales: [
    { code: 'en', iso: 'en-US', file: 'en/index.ts', name: 'English' },
    { code: 'id', iso: 'id-ID', file: 'id/index.ts', name: 'Bahasa Indonesia' },
  ],
  defaultLocale: 'en',
  strategy: 'no_prefix',
  hmr: process.env.NODE_ENV === 'dev',
  debug: process.env.NODE_ENV === 'dev',
}