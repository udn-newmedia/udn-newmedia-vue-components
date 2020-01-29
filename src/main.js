import Vue from 'vue';
Vue.config.productionTip = false;

/*
  For ENG.
  Create a vue spa
*/

// import App from './App.vue';

// new Vue({
//   el: '#app',
//   components:{
//     App
//   }
// });

/*
  For Customers.
  To bundle a components lib, 
*/

import AuthorTeam from './components/footer/AuthorTeam.vue';
import CopyRight from './components/footer/CopyRight.vue';
import UnitLogo from './components/footer/UnitLogo.vue';
import HeaderBar from './components/header/HeaderBar.vue';
import Indicator from './components/header/Indicator.vue';
import NavMenu from './components/header/NavMenu.vue';
import ShareFB from './components/header/ShareFB.vue';
import ShareLine from './components/header/ShareLine.vue';

new Vue({
  el: '#app',
  components:{
    AuthorTeam,
    CopyRight,
    UnitLogo,
    HeaderBar,
    Indicator,
    NavMenu,
    ShareFB,
    ShareLine,
  }
});