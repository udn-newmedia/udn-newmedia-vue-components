import Vue from 'vue';
import '~/style/main.scss';

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

// header
import HeaderBar from './components/_header/HeaderBar.vue';
import HeaderIndicator from './components/_header/HeaderIndicator.vue';
import HeaderMenu from './components/_header/HeaderMenu.vue';

// footer
import AuthorTeam from './components/_footer/AuthorTeam.vue';
import FbComment from './components/_footer/FbComment.vue';
import NextArticle from './components/_footer/NextArticle.vue';
import PageFooter from './components/_footer/PageFooter.vue';
import Questionnaire from './components/_footer/Questionnaire.vue';
import RelatedArticle from './components/_footer/RelatedArticle.vue';

// anchor
import SideAnchor from './components/_anchor/SideAnchor.vue';

// layout
import ColumnOne from './components/_layout/ColumnOne.vue';
import ColumnThree from './components/_layout/ColumnThree.vue';
import ColumnTwo from './components/_layout/ColumnTwo.vue';
import LoadingAnim from './components/_layout/LoadingAnim.vue';
import PageCover from './components/_layout/PageCover.vue';
import ParallaxSection from './components/_layout/ParallaxSection.vue';
import Quote from './components/_layout/Quote.vue';
import Youtube from './components/_layout/Youtube.vue';

// ui
// import ShareFb from './components/_ui/ShareFb.vue';
// import ShareLine from './components/_ui/ShareLine.vue';
// import UnitLogo from './components/_ui/UnitLogo.vue';

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

    ColumnOne,
    ColumnThree,
    ColumnTwo,
    LoadingAnim,
    PageCover,
    ParallaxSection,
    Quote,
    Youtube,
  }
});