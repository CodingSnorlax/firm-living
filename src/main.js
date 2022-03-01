import { createApp } from 'vue'
import 'bootstrap' // 載入 bootstrap JS
import axios from 'axios' // 複製貼
import VueAxios from 'vue-axios' // 複製貼
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .use(VueAxios, axios) // axios
  .mount('#app')
