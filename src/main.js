import Vue from 'vue';
import store from './store';
import '~/style/main.scss';
import detectDevice from '@/mixins/detectDevice.js';

Vue.config.productionTip = false;

/**
*  For ENG.
*  Create a vue spa
*/

// import App from './App.vue';

// new Vue({
//   el: '#app',
//   store,
//   components: {
//     App
//   },
//   mixins: [detectDevice]
// });








/**
*  For Customers.
*  To bundle a components lib, 
*/

// header
import HeaderBar from './components/header/HeaderBar.vue';
import HeaderBarSimplified from './components/header/HeaderBarSimplified.vue';

// footer
import AuthorTeam from './components/footer/AuthorTeam.vue';
import FbComment from './components/footer/FbComment.vue';
import NextArticle from './components/footer/NextArticle.vue';
import PageFooter from './components/footer/PageFooter.vue';
import Questionnaire from './components/footer/Questionnaire.vue';
import RelatedArticle from './components/footer/RelatedArticle.vue';

// layout
import ArticleParallax from './components/layout/ArticleParallax.vue';
import ArticleQuote from './components/layout/ArticleQuote.vue';
import ArticleYoutube from './components/layout/ArticleYoutube.vue';
import CastAnchor from './components/layout/CastAnchor.vue';
import ColumnOne from './components/layout/ColumnOne.vue';
import ColumnThree from './components/layout/ColumnThree.vue';
import ColumnTwo from './components/layout/ColumnTwo.vue';
import LoadingAnim from './components/layout/LoadingAnim.vue';
import PageBackTop from './components/layout/PageBackTop.vue';
import PageCover from './components/layout/PageCover.vue';
import PageIndicator from '@/components/layout/PageIndicator.vue';

// ui
import NmdButton from './components/ui/NmdButton.vue';
import NmdSelector from './components/ui/NmdSelector.vue';

new Vue({
  el: '#app',
  store,
  components: {
    HeaderBar,
    HeaderBarSimplified,
    
    AuthorTeam,
    FbComment,
    NextArticle,
    PageFooter,
    Questionnaire,
    RelatedArticle,

    ArticleParallax,
    ArticleQuote,
    ArticleYoutube,
    CastAnchor,
    ColumnOne,
    ColumnThree,
    ColumnTwo,
    LoadingAnim,
    PageBackTop,
    PageCover,
    PageIndicator,

    NmdButton,
    NmdSelector
  },
  mixins: [detectDevice],
});