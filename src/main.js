import Content from './components/Content.vue'
import Editor from './components/Editor.vue'
import FBComment from './components/FBComment.vue'
import Foot from './components/Foot.vue'
import HeadBar from './components/HeadBar.vue'
import Indicator from './components/Indicator.vue'
import Logo from './components/Logo.vue'
import Page from './components/Page.vue'
import Quote from './components/Quote.vue'
import Relate from './components/Relate.vue'
import Share from './components/Share.vue'

const UdnComponent = {
    install: function(Vue){
        
        Vue.component('ContentContainer', Content)
        Vue.component('Editor', Editor)
        Vue.component('FBComment', FBComment)
        Vue.component('Foot', Foot)
        Vue.component('HeadBar', HeadBar)
        Vue.component('Indicator', Indicator)
        Vue.component('Logo', Logo)
        Vue.component('Page', Page)
        Vue.component('Quote', Quote)
        Vue.component('Relate', Relate)
        Vue.component('Share', Share)

    }
}

export default UdnComponent

export { Content, Editor, FBComment, Foot, HeadBar, Indicator, Logo, Page, Quote, Relate, Share }

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(UdnComponent)
}

if (typeof window !== 'undefined' && window.Vue && typeof $ !== 'undefined' && typeof $.fn.fullpage !== 'undefined'){
    $(document).ready(function(){
        $('#page').fullpage({})
    })
}