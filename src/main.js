import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/main.scss'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

/* rec.udn.com追蹤碼 */
window.onload = () => {
  document.getElementsByTagName('iframe')[0].style.top = 0
}
