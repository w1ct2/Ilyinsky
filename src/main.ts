import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/scss/main.scss'
import '@/scss/fonts.scss'
import '@/scss/utilities.scss'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
