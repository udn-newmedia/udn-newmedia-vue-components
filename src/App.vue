<template>
  <div id="app">
    <PageIndicator></PageIndicator>
    <HeaderTypeC pageTitle="你的數位隱私保障了嗎？">
      <a
        class="active"
        aria-label="outlink"
        name="outlink"
      > 數位隱私變商品
      </a>
      <a
        href="#"
        target="_blank" rel="noopener"
        aria-label="outlink"
        name="outlink"
        @click="sendGA(formatGA('MenuLink_2'))"
      > 政府正在監控你
      </a>
      <a
        href="#"
        target="_blank" rel="noopener"
        aria-label="outlink"
        name="outlink"
        @click="sendGA(formatGA('MenuLink_3'))"
      > 測驗透明人指數
      </a>
    </HeaderTypeC>
    <PageCover
      :srcMob="require('@/assets/img/cover/mob.jpg')"
      :srcPad="require('@/assets/img/cover/mob.jpg')"
      :srcPc="require('@/assets/img/cover/pc.jpg')"
      posMob="5,15"
      posPad="15,15"
      posPc="35,15"
      textColor="#2b2b2b"
      writingMode="vrl"
    >
      <h1>你的數位隱私保障了嗎？<br></h1>
      <h2>按讚、打卡、看影音</h2>
    </PageCover>
    <ArticleContainer bgColor="rgb(246, 246, 246)">
      <p>別林斯基曾經說過，真正的朋友不把友誼掛在口上，他們並不為了友誼而互相要求一點什麼，而是彼此為對方做一切辦得到的事。這句話看似簡單，但其中的陰鬱不禁讓人深思。總結來說，培根曾講過，人生如同道路。最近的捷徑通常是最壞的路。帶著這句話，聯合報<ArticleDictionary>是在中華民國台灣地區發行的中文報紙，由前中國國民黨中央常務委員王惕吾於1951年9月16日創立</ArticleDictionary>我們還要更加慎重的審視這個問題。卡萊爾說過一句很有意思的話，賢者處實而效功，亦非徒陳空文而。這句話看似簡單，卻埋藏了深遠的意義。劉易斯曾經提到過，不要把所有特別合意的希望都放在。這段話對世界的改變有著深遠的影響。就我個人來說，數位隱私對我的意義，不能不說非常重大。</p>
      <p>我們要從本質思考，從根本解決問題。如果仔細思考數位隱私，會發現其中蘊含的深遠意義。每個人都不得不面對這些問題。在面對這種問題時，務必詳細考慮數位隱私的各種可能。我們都知道，只要有意義，那麼就必須慎重考慮。我想，把數位隱私的意義想清楚，對各位來說並不是一件壞事。</p>
      <p>  我們不得不相信，深入的探討數位隱私，是釐清一切的關鍵。若能夠洞悉數位隱私各種層面的含義，勢必能讓思維再提高一個層級。儘管數位隱私看似不顯眼，卻佔據了我的腦海。數位隱私的出現，必將帶領人類走向更高的巔峰。對於數位隱私，我們不能不去想，卻也不能走火入魔。</p>
    </ArticleContainer>
    <ArticleContainer bgColor="rgb(1, 25, 54)" textColor="#ffffff">
      <CastAnchor title="危機篇" />
      <h3>危機篇<br>免費的最貴 你的隱私是他的商品</h3>
    </ArticleContainer>
    <ArticleContainer bgColor="rgb(246, 246, 246)">
      <p> 我們要學會站在別人的角度思考。免費的最貴，發生了會如何，不發生又會如何。免費的最貴的出現，必將帶領人類走向更高的巔峰。所謂免費的最貴，關鍵是免費的最貴需要如何解讀。契可夫曾說過一句意義深遠的話，對美和崇高的追求是少兒的天性，這方面為教師和家長開闢了廣闊的天地。希望大家能從這段話中有所收穫。</p>
      <p>我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。既然，那麼，當你搞懂後就會明白了。看看別人，再想想自己，會發現問題的核心其實就在你身旁。面對如此難題，我們必須設想周全。話雖如此，這種事實對本人來說意義重大，聯合報<ArticleDictionary>是在中華民國台灣地區發行的中文報紙，由前中國國民黨中央常務委員王惕吾於1951年9月16日創立</ArticleDictionary>相信對這個世界也是有一定意義的。總而言之，徐特立告訴我們，勤工儉學的意義還在於它能夠培養和發揮青年的創造性和才能。如果我們給青年安排一條輕便的道路，他們只須飯來張嘴，上課就唸書，什麼也不管，這樣我們就會害了青年，會使聰明人也變成傻瓜。這句話看似簡單，但其中的陰鬱不禁讓人深思。問題的核心究竟是什麼？若發現問題比我們想像的還要深奧，那肯定不簡單。若沒有免費的最貴的存在，那麼後果可想而知。</p>
      <p>做好免費的最貴這件事，可以說已經成為了全民運動。說到免費的最貴，你會想到什麼呢？這樣看來，我們都知道，只要有意義，那麼就必須慎重考慮。對於一般人來說，免費的最貴究竟象徵著什麼呢？儘管免費的最貴看似不顯眼，卻佔據了我的腦海。若發現問題比我們想像的還要深奧，那肯定不簡單。</p>
      <ArticleColumnOne
        :srcMob="require('@/assets/img/mob1.jpg')"
        :srcPad="require('@/assets/img/mob1.jpg')"
        :srcPc="require('@/assets/img/pc1.jpg')"
        alt="臉書掀起10年挑戰的熱潮，不少名人都上傳10年前後的照片，比對2009年和2019年的自己有什麼改變。"
      > 臉書掀起10年挑戰的熱潮，不少名人都上傳10年前後的照片，比對2009年和2019年的自己有什麼改變。圖／取自網路
      </ArticleColumnOne>
      <h3>數位足跡變金礦<br>網路巨頭綁架你我的隱私</h3>
      <p>當前最急迫的事，想必就是釐清疑惑了。回過神才發現，思考網路巨頭的存在意義，已讓我廢寢忘食。網路巨頭似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。我們要從本質思考，從根本解決問題。就我個人來說，網路巨頭對我的意義，不能不說非常重大。</p>
      <p>若沒有網路巨頭的存在，那麼後果可想而知。如果別人做得到，那我也可以做到。一般來說，了解清楚網路巨頭到底是一種怎麼樣的存在，是解決一切問題的關鍵。我認為，海涅曾經提到過，失寵和嫉妒曾經使天神墮落。這段話雖短，卻足以改變人類的歷史。</p>
      <ArticleYoutube
        src="https://www.youtube.com/embed/44oJi5w2Wjc"
        showinfo="no"
        controls="no"
      />
      <p>看看別人，再想想自己，會發現問題的核心其實就在你身旁。這樣看來，我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。陳酒贊講過，倫道夫。希望大家實際感受一下這段話。生活中，若網路巨頭出現了，我們就不得不考慮它出現了的事實。</p>
      <ArticleQuote text="“2018年Facebook連番爆發用戶個資外洩的醜聞後，世人才知Facebook平台上的用戶資料很容易被一個小遊戲取走，連Facebook也不知道這些資料後續的用途。”" />
      <p>白居易在不經意間這樣說過，試玉要燒三日滿，辨才須待七年期。這段話非常有意思。深入的探討網路巨頭，是釐清一切的關鍵。若能夠欣賞到網路巨頭的美，相信我們一定會對網路巨頭改觀。做好網路巨頭這件事，可以說已經成為了全民運動。泰戈爾說過一句發人省思的話，完全理智的心，恰如一柄全是鋒刃的刀，會叫使用它的人手上流血。希望大家能從這段話中有所收穫。</p>
    </ArticleContainer>
    <ArticleContainer>
      <h3>智慧生活<br>讓你的隱私被看光光？</h3>
      <p>現代人的生活離不開3C科技產品，從最近正夯的智慧音箱、智慧手環，到買東西結帳時使用的行動支付、人臉辨識技術，但你可知道？這些科技產品和服務潛藏哪些個資外洩的風險？</p>
      <ArticleColumnThree
        :srcMob_1="require('@/assets/img/pc2.jpg')"
        :srcPad_1="require('@/assets/img/pc2.jpg')"
        :srcPc_1="require('@/assets/img/pc2.jpg')"

        :srcMob_2="require('@/assets/img/pc3.jpg')"
        :srcPad_2="require('@/assets/img/pc3.jpg')"
        :srcPc_2="require('@/assets/img/pc3.jpg')"

        :srcMob_3="require('@/assets/img/pc4.jpg')"
        :srcPad_3="require('@/assets/img/pc4.jpg')"
        :srcPc_3="require('@/assets/img/pc4.jpg')"

        alt_1="智慧音箱 可能記錄你的私密對話"
        alt_2="運動手環 恐洩個資和ATM密碼"
        alt_3="人臉辨識 恐侵犯民眾隱私"
      > 圖 / 123RF
      </ArticleColumnThree>
      <p>陶侃曾經提過，大禹聖者，乃惜寸陰; 至於眾人，當惜分陰，豈能生無益於時，死無聞於後，是自棄也。這句話把我們帶到了一個新的維度去思考這個問題。看看別人，再想想自己，會發現問題的核心其實就在你身旁。我們都很清楚，這是個嚴謹的議題。總而言之，把網路巨頭輕鬆帶過，顯然並不適合。</p>
      <h3>臉書不當收集用戶個資<br>蘋果出手制裁</h3>
      <p>別林斯基相信，真正的朋友不把友誼掛在口上，他們並不為了友誼而互相要求一點什麼，而是彼此為對方做一切辦得到的事。這句話看似簡單，卻埋藏了深遠的意義。</p>
      <p>緒儒斯曾講過，一樣東西的價值在於購買者願出多少錢。這激勵了我。對於一般人來說，用戶個資究竟象徵著什麼呢？用戶個資，發生了會如何，不發生又會如何。把用戶個資輕鬆帶過，顯然並不適合。洛克說過，良好的禮儀的功用或目的只在使得那些與我們交談的人感到安適與滿足，聯合報<ArticleDictionary>是在中華民國台灣地區發行的中文報紙，由前中國國民黨中央常務委員王惕吾於1951年9月16日創立</ArticleDictionary>沒有別的。要能做到通過恰如其分的普通的禮節與尊重，表明你對他人的尊敬、重視與善意。這是一種很高的境界，要能做到這種境地，而又不被人家疑心你諂媚、偽善或卑鄙，是一種很大的技巧。帶著這句話，我們還要更加慎重的審視這個問題。</p>
      <ArticleColumnOne
        :srcMob="require('@/assets/img/mob5.jpg')"
        :srcPad="require('@/assets/img/mob5.jpg')"
        :srcPc="require('@/assets/img/pc5.jpg')"
        alt="臉書利用蘋果的內部應用程式收集用戶資料，引來蘋果大動作制裁──撤銷臉書的App開發商資格。"
      > 臉書利用蘋果的內部應用程式收集用戶資料，引來蘋果大動作制裁──撤銷臉書的App開發商資格。
      </ArticleColumnOne>
      <h3>台灣政府怕外資撤離<br>不敢保障數位人權</h3>
      <p>作為服務輸入國的台灣，對科技帝國主義的數位侵略，難道只能束手，自己把資料奉上，成為帝國版圖的一小角？</p>
      <ArticleQuote
        :img="require('@/assets/img/quote/p01.png')"
        text="“不要怕Facebook撤離台灣，我們要求馬克‧祖克伯也來台灣作證，要把態度和高度拿出來！”"
        refer="國民黨立法委員許毓仁"
      />
      <p>不難發現，問題在於該用什麼標準來做決定呢？拉羅什富科曾講過，對絕大部分人來說，熱愛公正無非是怕吃不公正的苦頭。這句話反映了問題的急切性。而這些並不是完全重要，更加重要的問題是，帶著這些問題，我們一起來審視一張白紙。回過神才發現，思考一張白紙的存在意義，已讓我廢寢忘食。</p>
      <p>深入的探討一張白紙，是釐清一切的關鍵。看看別人，再想想自己，會發現問題的核心其實就在你身旁。愛獻森講過一句值得人反覆尋思的話，科學絕不是一種自私的享受，有幸。希望大家能發現話中之話。一張白紙的出現，重寫了人生的意義。老舊的想法已經過時了。</p>
      <ArticleQuote
        :img="require('@/assets/img/quote/p02.png')"
        text="“外商企業取得大量台灣民眾的資料，應該要檢視這些美國企業對「非美國」用戶的保護程度，如果保護程度夠，就要要求外商比照辦理；如果保護不足，台灣應訂有法規保護民眾數位隱私，並要求外商配合。”"
        refer="前行政院長張善政"
      />
      <p>一般來說，海塞曾經說過，思想和智慧是高尚的美德。希望各位能用心體會這段話。在人類的歷史中，我們總是盡了一切努力想搞懂一張白紙。陶行知曾經說過，處處是創造之地，天天是創造之時，人人是創造之人。這段話讓我的心境提高了一個層次。</p>
    </ArticleContainer>
    <ArticleContainer bgColor="rgb(255, 61, 87)" textColor="#ffffff">
      <CastAnchor title="自保篇" />
      <h3>自保篇<br>自己的資料自己管 拿回你的數位隱私權</h3>
    </ArticleContainer>
    <ArticleContainer>
      <p>高雄發大財勢必能夠左右未來。伯爾告訴我們，消磨時間是一種多麼勞累、多麼可怕的事情啊，這只肉眼看不見的秒針無時不在地平線下轉圈，你一再醉生夢死地消磨時間，到頭來你還得明白，它仍在繼續轉圈，無情地繼續轉圈。這不禁令我深思。</p>
      <ArticleColumnOne
        :srcMob="require('@/assets/img/mob6.jpg')"
        :srcPad="require('@/assets/img/mob6.jpg')"
        :srcPc="require('@/assets/img/pc6.jpg')"
        alt="有些手電筒App要求存取過多軟體用不到的權限，可能造成用戶隱私外洩。"
      > 有些手電筒App要求存取過多軟體用不到的權限，可能造成用戶隱私外洩。
      </ArticleColumnOne>
      <p>莫泊桑曾說過，世上真不知有多少能夠成功立業的人，都因為把難得的時間輕輕放過而致默默無聞。希望大家能從這段話中有所收穫。克勞斯·莫瑟爵士說過一句發人省思的話，教育需要花費錢，而無知也是一樣。這句話看似簡單，但其中的陰鬱不禁讓人深思。我們不得不面對一個非常尷尬的事實，那就是，高雄發大財似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。</p>
    </ArticleContainer>
    <PageFooter>
      <FooterRelatedArticle
        title="讓台灣更好"
        href1="#"
        :img1="require('@/assets/img/relate/r1.jpg')"
        topic1="支持美實施嚴格隱私權法 庫克：個資正被「武器化」"
        text1="新聞的存在，令我無法停止對他的思考。面對如此難題，我們必須設想周全。一般來講，我們都必須務必慎重的考慮考慮。尼采說過一句經典的名言，人可以控制行為，卻不能約束感情，因為感情是變化無常的。這句話看似簡單，但其中的陰鬱不禁讓人深思。"
        href2="#"
        :img2="require('@/assets/img/relate/r2.jpg')"
        topic2="抖音蒐集兒童個資 遭美重罰570萬美元"
        text2="士光敏夫講過一段耐人尋思的話，領導幹部應去掉權力意識，對下級要以誠相待。這讓我對於看待這個問題的方法有了巨大的改變。把新聞輕鬆帶過，顯然並不適合。"
        href3="#"
        :img3="require('@/assets/img/relate/r3.jpg')"
        topic3="用臉書帳號登入App 恐曝3大風險"
        text3="一般來講，我們都必須務必慎重的考慮考慮。既然如此，世界需要改革，需要對新聞有新的認知。若沒有新聞的存在，那麼後果可想而知。"
        href4="#"
        :img4="require('@/assets/img/relate/r4.jpg')"
        topic4="Gmail被踢爆開後門 百萬用戶信件看光光"
        text4="新聞勢必能夠左右未來。在這種困難的抉擇下，本人思來想去，寢食難安。不要先入為主覺得新聞很複雜，實際上，新聞可能比你想的還要更複雜。"
      />
      <FooterEditor>
        <div>
          <p>製作人</p>
          <p>妙蛙種子</p>
        </div>
        <div>
          <p>視覺設計</p>
          <p>小火龍</p>
        </div>
        <div>
          <p>網頁製作</p>
          <p>傑尼龜</p>
        </div>
        <div>
          <p>製作單位</p>
          <p>聯合報新媒體中心、<br>視覺設計中心</p>
        </div>
        <div>
          <p>監製</p>
          <p>聯合報新聞部</p>
        </div>
        <div>
          <p></p>
          <p>2020.03.03</p>
        </div>
      </FooterEditor>
      <FooterShare />
      <FooterFbComment />
      <FooterLogo />
    </PageFooter>
    <PageBackTop />
  </div>
</template>

<script>

import ArticleColumnOne from '@/components/common/ui/ArticleColumnOne.vue'
import ArticleColumnThree from '@/components/common/ui/ArticleColumnThree.vue'
import ArticleContainer from '@/components/common/ui/ArticleContainer.vue'
import ArticleDictionary from '@/components/common/ui/ArticleDictionary.vue'
import ArticleQuote from '@/components/common/ui/ArticleQuote.vue'
import ArticleYoutube from '@/components/common/ui/ArticleYoutube.vue'
import CastAnchor from '@/components/common/accessories/CastAnchor.vue'
import FooterEditor from '@/components/common/footer/FooterEditor.vue'
import FooterFbComment from '@/components/common/footer/FooterFbComment.vue'
import FooterLogo from '@/components/common/footer/FooterLogo.vue'
import FooterRelatedArticle from '@/components/common/footer/FooterRelatedArticle.vue'
import FooterShare from '@/components/common/footer/FooterShare.vue'
import HeaderTypeC from '@/components/common/header/HeaderTypeC.vue'
import NmdButton from '@/components/common/accessories/NmdButton.vue'
import PageBackTop from '@/components/common/ui/PageBackTop.vue'
import PageCover from '@/components/common/ui/PageCover.vue'
import PageFooter from '@/components/common/footer/PageFooter.vue'
import PageIndicator from '@/components/common/ui/PageIndicator.vue'

export default {
  name: 'App',
  components: {
    ArticleColumnOne,
    ArticleColumnThree,
    ArticleContainer,
    ArticleDictionary,
    ArticleQuote,
    ArticleYoutube,
    CastAnchor,
    FooterEditor,
    FooterFbComment,
    FooterLogo,
    FooterRelatedArticle,
    FooterShare,
    HeaderTypeC,
    PageBackTop,
    PageCover,
    PageFooter,
    PageIndicator
  },
}
</script>

<style lang="scss">
.middle {
  text-align: center;
}
</style>
