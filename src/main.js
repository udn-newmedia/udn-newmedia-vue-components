import Vue from 'vue';
import store from './store';
import '~/style/main.scss';
import { rwdMethods } from '@/mixins/masterBuilder.js';

Vue.config.productionTip = false;
Window.Promise = Promise;

/**
*  For ENG.
*  Create a vue spa
*/

import App from './App.vue';
new Vue({
  store,
  render: h => h(App),
  mixins: [rwdMethods]
}).$mount('#app')
