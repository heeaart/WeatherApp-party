import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Weather from './Weather.vue'

createApp(App).mount('#app')
createApp(Weather).mount('#weather')

