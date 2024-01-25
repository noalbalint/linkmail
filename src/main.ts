import { createApp } from 'vue'
import './style.css'
import './tailwind.css'
import router from './routes'
import AppVue from './App.vue'

const app = createApp(AppVue)

app.use(router);
app.mount('#app')
