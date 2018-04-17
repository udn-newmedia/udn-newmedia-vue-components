<template>
  <div class="google_tag">
    <!-- /129853887/udn.com/News/SuperBanner -->
    <div v-show="isAdEmpty" id='div-gpt-ad-1500260348414-0' class="Ads_container"></div>
    <!-- /129853887/udn.com/Mobile/Mobile_320*100 -->
    <div v-show="isAdEmpty" id='div-gpt-ad-1503287606545-0' class="Ads_container"></div>
  </div>
</template>

<script>
export default {
  name: 'DFPads',
  props: {
    dfpKey: {
      type: String,
      default: () => {
        return 'cat'
      }
    },
    dfpValue: {
      type: Array,
      default: () => {
        return ['8006', '倡議家']
      }
    }
  },
  data () {
    return {
      isAdEmpty: false,
    }
  },
  methods: {
    google_ad_init: function () {
      const vm = this
      const googletag = window.googletag || {};
      googletag.cmd = googletag.cmd || [];

      googletag.cmd.push(function() {

        /* 尺寸設定 */
        /* 唯網頁呈現 */
        const webonly_SuperBanner = googletag.sizeMapping().
          addSize([1000, 200], [[970, 90], [1200, 110], [728, 90], [970, 250]]).
          addSize([0, 0], []).
          build();

        /* 唯手機呈現 */
        const mobileonly_320x50_320x100_300x250_336x280 = googletag.sizeMapping().
          addSize([1000, 200], []).
          addSize([0, 0], [[336, 280], [300, 250], [320, 100], [320, 50]]).
          build();

        /* (webonly_SuperBanner) */
        /* 網頁 -- 【新聞網】SuperBanner_1200*110 (google DFP)google拆code */
        googletag.defineSlot('/129853887/udn.com/News/SuperBanner', [[970, 90], [970, 250], [1200, 110], [728, 90]], 'div-gpt-ad-1500260348414-0').defineSizeMapping(webonly_SuperBanner).setCollapseEmptyDiv(true).addService(googletag.pubads());

        /* (mobileonly_320x50_320x100_300x250_336x280) */
        /* 手機 -- 【新聞網】Mobile頭版大佈告300*250廣告_頻道頁_內文頁 (google拆code) */
        googletag.defineSlot('/129853887/udn.com/Mobile/Mobile_320*100', [[336, 280], [300, 250], [320, 100], [320, 50]], 'div-gpt-ad-1503287606545-0').defineSizeMapping(mobileonly_320x50_320x100_300x250_336x280).setCollapseEmptyDiv(true).addService(googletag.pubads());

        // googletag.pubads().setTargeting("cat", ['8006','倡議家']);
        googletag.pubads().setTargeting(vm.dfpKey, vm.dfpValue);
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
      googletag.cmd.push(function() {
        googletag.display('div-gpt-ad-1500260348414-0');
      });
      googletag.cmd.push(function() {
        googletag.display('div-gpt-ad-1503287606545-0');
      });
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if(event.isEmpty === false) {
          vm.isAdEmpty = true
        }
      })
    }
  },
  mounted: function () {
    setTimeout(()=>{
      this.google_ad_init()
    }, 777)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .google_tag{
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 444ms ease-in-out;
  }
  .Ads_container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
