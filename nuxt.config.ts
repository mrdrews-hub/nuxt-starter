import tailwindcss from '@tailwindcss/vite'
import { AppConfig } from './app/config/app.config'
import { NuxtI18nConfig } from './app/config/i18n.config'
import { NuxtImgConfig } from './app/config/image.config'
import { PrimeVueConfig } from './app/config/prime.config'
import { pwa } from './app/config/pwa'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@primevue/nuxt-module',
    '@nuxt/eslint',
    'nuxt-auth-utils',
    '@nuxt/fonts',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],
  ssr: true,
  devtools: { enabled: true },
  app: AppConfig,
  css: ['./app/assets/css/main.css', 'primeicons/primeicons.css'],
  build: {
    analyze: true,
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    preset: 'bun',
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  i18n: NuxtI18nConfig,
  image: NuxtImgConfig,
  primevue: PrimeVueConfig,
})