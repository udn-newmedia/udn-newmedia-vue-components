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
import FooterEditor from './components/footer/FooterEditor.vue';
import FooterFbComment from './components/footer/FooterFbComment.vue';
import FooterLogo from './components/footer/FooterLogo.vue';
import FooterNextArticle from './components/footer/FooterNextArticle.vue';
import FooterQuestionnaire from './components/footer/FooterQuestionnaire.vue';
import FooterRelatedArticle from './components/footer/FooterRelatedArticle.vue';
import FooterShare from './components/footer/FooterShare.vue';
import PageFooter from './components/footer/PageFooter.vue';

// layout
import ArticleCastAnchor from './components/layout/ArticleCastAnchor.vue';
import ArticleColumnOne from './components/layout/ArticleColumnOne.vue';
import ArticleColumnThree from './components/layout/ArticleColumnThree.vue';
import ArticleColumnTwo from './components/layout/ArticleColumnTwo.vue';
import ArticleParallax from './components/layout/ArticleParallax.vue';
import ArticleQuote from './components/layout/ArticleQuote.vue';
import ArticleYoutube from './components/layout/ArticleYoutube.vue';
import PageBackTop from './components/layout/PageBackTop.vue';
import PageCover from './components/layout/PageCover.vue';
import PageIndicator from '@/components/layout/PageIndicator.vue';
import PageSideAnchor from '@/components/layout/PageSideAnchor.vue';

// ui
import NmdButton from './components/ui/NmdButton.vue';
import NmdDictionary from './components/ui/NmdDictionary.vue';
import NmdSelector from './components/ui/NmdSelector.vue';

new Vue({
  el: '#app',
  store,
  components: {
    HeaderBar,
    HeaderBarSimplified,
    
    FooterEditor,
    FooterFbComment,
    FooterLogo,
    FooterNextArticle,
    FooterQuestionnaire,
    FooterRelatedArticle,
    FooterShare,
    PageFooter,

    ArticleCastAnchor,
    ArticleColumnOne,
    ArticleColumnThree,
    ArticleColumnTwo,
    ArticleParallax,
    ArticleQuote,
    ArticleYoutube,
    PageBackTop,
    PageCover,
    PageIndicator,
    PageSideAnchor,

    NmdButton,
    NmdDictionary,
    NmdSelector
  },
  mixins: [rwdMethods],
});