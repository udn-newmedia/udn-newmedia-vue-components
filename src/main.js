import Vue from 'vue';
import '~/style/main.scss';
import VueScrollTo from 'vue-scrollto';
import detectDevice from '@/mixins/detectDevice.js';

Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  container: "body",
  duration: 800,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

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

// header
import HeaderBar from './components/header/HeaderBar.vue';
import HeaderIndicator from './components/header/HeaderIndicator.vue';
import HeaderMenu from './components/header/HeaderMenu.vue';

// footer
import AuthorTeam from './components/footer/AuthorTeam.vue';
import FbComment from './components/footer/FbComment.vue';
import NextArticle from './components/footer/NextArticle.vue';
import PageFooter from './components/footer/PageFooter.vue';
import Questionnaire from './components/footer/Questionnaire.vue';
import RelatedArticle from './components/footer/RelatedArticle.vue';

// anchor
import SideAnchor from './components/anchor/SideAnchor.vue';

// layout
import BackTop from './components/layout/BackTop.vue';
import ColumnOne from './components/layout/ColumnOne.vue';
import ColumnThree from './components/layout/ColumnThree.vue';
import ColumnTwo from './components/layout/ColumnTwo.vue';
import LoadingAnim from './components/layout/LoadingAnim.vue';
import PageCover from './components/layout/PageCover.vue';
import ParallaxSection from './components/layout/ParallaxSection.vue';
import Quote from './components/layout/Quote.vue';
import Youtube from './components/layout/Youtube.vue';

import ShareFb from './components/ui/ShareFb.vue';


new Vue({
  el: '#app',
  components:{
    HeaderBar,
    HeaderIndicator,
    HeaderMenu,

    AuthorTeam,
    FbComment,
    NextArticle,
    PageFooter,
    Questionnaire,
    RelatedArticle,

    SideAnchor,

    BackTop,
    ColumnOne,
    ColumnThree,
    ColumnTwo,
    LoadingAnim,
    PageCover,
    ParallaxSection,
    Quote,
    Youtube,

    ShareFb
  },
  mixins: [detectDevice],
});