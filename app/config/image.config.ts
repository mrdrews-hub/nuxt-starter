import type { NuxtConfig } from 'nuxt/config'

export const NuxtImgConfig: NuxtConfig['image'] = {
  quality: 80,
  domains: ['nuxtjs.org'],
  presets: {
    icon: {
      modifiers: {
        format: 'png',
        width: 50,
        height: 50,
      },
    },
  },
}