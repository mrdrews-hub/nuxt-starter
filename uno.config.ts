import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      background: {
        bg1: 'red',
        bg2: '#FAFAFA',
        bg3: '#E7F7EF',
        bg4: '#F1F2F4',
        bg5: '#FFFFFF',
        bg6: '#FAFAFA',
      },
      content: {
        content1: '#111827',
        content2: '#687588',
        content3: '#A0AEC0',
        content4: '#E9EAEC',
        content5: '#E9EAEC',
        content6: '#E9EAEC',
        content7: '#FFFFFF',
        content8: '#F8F8F8',
        content9: '#27AE76',
      },
      divider: {
        divider1: '#F1F2F4',
      },
    },
  },
})
