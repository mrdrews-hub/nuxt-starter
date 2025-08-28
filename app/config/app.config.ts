import type { NuxtConfig } from 'nuxt/config'
import { appDescription } from '../constants'

export const AppConfig: NuxtConfig['app'] = {
  pageTransition: { name: 'page', mode: 'out-in' },
  layoutTransition: { name: 'layout', mode: 'out-in' },
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
      { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'black' },
      { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
    ],
  },
}