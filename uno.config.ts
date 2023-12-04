import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetTagify,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import transformerCompileClass from '@unocss/transformer-compile-class'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetMini(),
    presetTypography(),
    presetTagify(),
    presetWebFonts(),
    presetRemToPx(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerCompileClass(),
    transformerDirectives(),
  ],
})
