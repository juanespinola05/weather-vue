import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiCloudSunFill,
  FaInfoCircle,
  FaTemperatureLow,
  FaWind,
  HiSolidPlusCircle,
  IoSearch,
  MdGrainTwotone
} from 'oh-vue-icons/icons'

const app = createApp(App)

addIcons(BiCloudSunFill, FaInfoCircle, HiSolidPlusCircle, IoSearch, MdGrainTwotone, FaTemperatureLow, FaWind)

app.component('v-icon', OhVueIcon)

app.use(router)

app.mount('#app')
