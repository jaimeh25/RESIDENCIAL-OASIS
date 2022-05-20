import { boot } from 'quasar/wrappers'

import JcDialog from 'components/JcDialog.vue'

export default async ({ app }) => {
  app.component('jc-dialog', JcDialog)
}
