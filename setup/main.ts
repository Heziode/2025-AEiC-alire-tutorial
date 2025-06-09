import { defineAppSetup } from '@slidev/types'
import QrcodeVue from 'qrcode.vue'

export default defineAppSetup(({ app }) => {
  // Vue App
  app.component('QrcodeVue', QrcodeVue)
})