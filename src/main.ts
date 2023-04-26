import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill } from 'oh-vue-icons/icons'

const app = createApp(App)

addIcons(FaFlag, RiZhihuFill)

app.component('v-icon', OhVueIcon)

app.use(router)

app.mount('#app')
