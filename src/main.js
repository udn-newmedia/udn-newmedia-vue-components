import Vue from 'vue'
import Anchor from './new_comp/Anchor.vue'
import BackTop from './new_comp/BackTop.vue'
import ColumnOne from './new_comp/ColumnOne.vue'
import ColumnThree from './new_comp/ColumnThree.vue'
import ColumnTwo from './new_comp/ColumnTwo.vue'
import ContentContainer from './new_comp/Content.vue'
import Cover from './new_comp/Cover.vue'
import Editor from './new_comp/Editor.vue'
import FbComment from './new_comp/FbComment.vue'
import Foot from './new_comp/Foot.vue'
import HeadBar from './new_comp/HeadBar.vue'
import Indicator from './new_comp/Indicator.vue'
import Logo from './new_comp/Logo.vue'
import Question from './new_comp/Question.vue'
import Quote from './new_comp/Quote.vue'
import Relate from './new_comp/Relate.vue'
import ParallaxBg from './new_comp/ParallaxBg.vue'
import Share from './new_comp/Share.vue'
import Youtube from './new_comp/Youtube.vue'

import store from './store'

Vue.config.productionTip = false

// const UdnComponent = {
//   install: function(Vue){
//     Vue.component('Anchor', Anchor)
//     Vue.component('BackTtop', BackTop)
//     Vue.component('ColumnOne', ColumnOne)
//     Vue.component('ColumnTwo', ColumnTwo)
//     Vue.component('ContentContainer', ContentContainer)
//     Vue.component('Cover', Cover)
//     Vue.component('Editor', Editor)
//     Vue.component('FbComment', FbComment)
//     Vue.component('Foot', Foot)
//     Vue.component('HeadBar', HeadBar)
//     Vue.component('Indicator', Indicator)
//     Vue.component('Logo', Logo)      
//     Vue.component('Question', Question)
//     Vue.component('Quote', Quote)
//     Vue.component('Relate', Relate)
//     Vue.component('ParallaxBg', ParallaxBg)
//     Vue.component('ColumnThree', ColumnThree)
//     Vue.component('Share', Share)
//     Vue.component('Youtube', Youtube)
//   }
// }



// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(UdnComponent)
// }
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
      Editor,
      FbComment,
      Foot,
      HeadBar,
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
