/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    // theme: 'one-dark-pro',
    themes: {
      dark: 'github-dark',
      light: 'github-light',
    },
  }
})