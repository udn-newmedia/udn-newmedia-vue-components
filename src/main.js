import Vue from 'vue'
import App from './App.vue'
import store from './store';
import '~/style/main.scss';
import { rwdMethods } from '@/mixins/masterBuilder.js';

Vue.config.productionTip = false
Window.Promise = Promise;

new Vue({
  store,
  render: h => h(App),
  mixins: [rwdMethods]
}).$mount('#app')

// rec.udn.com追蹤碼
window.onload = () => {
  document.getElementsByTagName('iframe')[0].style.top = 0;
};