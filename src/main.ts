import { createApp } from 'vue'
import App from './App.vue'
import './global.css'
import { router } from './pages/routes'

const app = createApp(App)
app.use(router)
app.mount('#app')
