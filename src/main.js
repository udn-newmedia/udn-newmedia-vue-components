import Vue from 'vue'
import Anchor from './components/Anchor.vue'
import BackTop from './components/BackTop.vue'
import ColumnOne from './components/ColumnOne.vue'
import ColumnThree from './components/ColumnThree.vue'
import ColumnTwo from './components/ColumnTwo.vue'
import ContentContainer from './components/Content.vue'
import Cover from './components/Cover.vue'
import CoverVideo from './components/CoverVideo.vue'
import Editor from './components/Editor.vue'
import FbComment from './components/FbComment.vue'
import FbQuote from './components/FbQuote.vue'
import Foot from './components/Foot.vue'
import HeadBar from './components/HeadBar.vue'
import HeadBarSimplified from './components/HeadBarSimplified.vue'
import Indicator from './components/Indicator.vue'
import Logo from './components/Logo.vue'
import Question from './components/Question.vue'
import Quote from './components/Quote.vue'
import Relate from './components/Relate.vue'
import ParallaxBg from './components/ParallaxBg.vue'
import Share from './components/Share.vue'
import Youtube from './components/Youtube.vue'

import store from './store'

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', function (event) {
  const app = new Vue({
    el: '#app',
    store,
    components: {
      Anchor,
      BackTop,
      ColumnOne,
      ColumnThree,
      ColumnTwo,
      ContentContainer,
      Cover,
      CoverVideo,
      Editor,
      FbComment,
      FbQuote,
      Foot,
      HeadBar,
      HeadBarSimplified,
      Indicator,
      Logo,
      Question,
      Quote,
      Relate,
      ParallaxBg,
      Share,
      Youtube
    }
  })
})
