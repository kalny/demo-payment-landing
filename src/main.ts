import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import { useAppStore } from './stores/app.ts'
import { registerApiInterceptors } from './api/interceptors.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
})

registerApiInterceptors()

const appStore = useAppStore()

await appStore.bootstrap()

app.mount('#app')
