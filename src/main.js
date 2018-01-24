import ColumnThree from './components/ColumnThree.vue'
import ColumnTwo from './components/ColumnTwo.vue'
import Content from './components/Content.vue'
import Cover from './components/Cover.vue'
import Editor from './components/Editor.vue'
import FbComment from './components/FbComment.vue'
import Foot from './components/Foot.vue'
import HeadBar from './components/HeadBar.vue'
import Indicator from './components/Indicator.vue'
import Logo from './components/Logo.vue'
import Page from './components/Page.vue'
import Question from './components/Question.vue'
import Quote from './components/Quote.vue'
import Relate from './components/Relate.vue'
import SectionBg from './components/SectionBg.vue'
import SectionFixedBg from './components/SectionFixedBg.vue'
import Share from './components/Share.vue'
import Youtube from './components/Youtube.vue'

const UdnComponent = {
    install: function(Vue){
        
        Vue.component('ColumnThree', ColumnThree)
        Vue.component('ColumnTwo', ColumnTwo)
        Vue.component('ContentContainer', Content)
        Vue.component('Cover', Cover)
        Vue.component('Editor', Editor)
        Vue.component('FbComment', FbComment)
        Vue.component('Foot', Foot)
        Vue.component('HeadBar', HeadBar)
        Vue.component('Indicator', Indicator)
        Vue.component('Logo', Logo)
        Vue.component('Page', Page)
        Vue.component('Question', Question)
        Vue.component('Quote', Quote)
        Vue.component('Relate', Relate)
        Vue.component('SectionBg', SectionBg)
        Vue.component('SectionFixedBg', SectionFixedBg)
        Vue.component('Share', Share)
        Vue.component('Youtube', Youtube)

    }
}

export default UdnComponent

export { ColumnThree, ColumnTwo, Content, Cover, Editor, FbComment, Foot, HeadBar, Indicator, Logo, Page, Question, Quote, Relate, SectionBg, SectionFixedBg, Share, Youtube }

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(UdnComponent)
}

if (typeof window !== 'undefined' && window.Vue && typeof $ !== 'undefined' && typeof $.fn.fullpage !== 'undefined'){
    $(document).ready(function(){
        $('#page').fullpage({})
    })
}