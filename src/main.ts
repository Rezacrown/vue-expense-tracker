import './assets/style.css'

import Toast, { POSITION } from 'vue-toastification'
import type { PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'

const options: PluginOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 3000
}

const app = createApp(App)

app.use(Toast, options)

app.mount('#app')
