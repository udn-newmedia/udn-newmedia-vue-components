import Vue from 'vue';
import { rwdMethods } from '@/mixins/masterBuilder.js';
import App from './App.vue';
import store from './store';
import '@/assets/style/main.scss';

Vue.config.productionTip = false;
Vue.prototype.$anchorList = [];

new Vue({
  store,
  render: (h) => h(App),
  mixins: [rwdMethods],
}).$mount('#app');

/* rec.udn.com追蹤碼 */
window.onload = () => {
  document.getElementsByTagName('iframe')[0].style.top = 0;
};
