import presetWind3 from '@unocss/preset-wind3'
import presetWind4 from '@unocss/preset-wind4'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerDirectives from '@unocss/transformer-directives'
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetWind4(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts(),
    presetAnimations({
      color: "blue",
    },
    {
      // If you are using reka ui.
      componentLibrary: "reka",
    }),
    presetShadcn(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})