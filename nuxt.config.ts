import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@unocss/nuxt',
  ],
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  icon: {
    serverBundle: {
      collections: ['mingcute']
    },
  },

  /** @see https://i18n.nuxtjs.org/docs/api/options */
  i18n: {
    locales: [
      { name: 'English', code: 'en', language: 'en-US' },
      { name: 'Indonesia', code: 'id', language: 'id-ID' }
    ],
    defaultLocale: 'id',
    strategy: 'no_prefix'
  },

  /** @see https://google-fonts.nuxtjs.org/getting-started/options */
  googleFonts: {
    families: {
      Manrope: [400, 500, 600, 700],
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  pwa,
})
