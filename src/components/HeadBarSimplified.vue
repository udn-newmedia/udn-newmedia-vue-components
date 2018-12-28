<template>
  <header class="header" :style="{ transform: 'translate3d(0,' + header_top + 'px, 0)' }" :class="{'header_open': isMenuOpen}">
    
    <div class="TheBar" :style="{ backgroundColor: bar_color }">
      
      <!-- logo 圖案 -->
      <div class="logo_box">
        <a href="https://ubrand.udn.com/ubrand/index" target="_blank" @click="handle_logoGA"><i class="udn-icon udn-icon-logo" :style="{ color: setProps('iconColor') }"></i></a>
        <!-- <a href=""><img class="other_logo" src="../../static/otherlogo.jpg" alt=""></a> -->
        <slot name="logo"></slot>
      </div>
      
      <!-- 漢堡圖案 -->
      <div v-if="showMenu" class="menu_box">
        <div class="burger-icon" :class="{ 'burger-open': isMenuOpen }" @click="handle_Burger()">
          <span :style="{ backgroundColor: setProps('iconColor') }"></span>
          <span :style="{ backgroundColor: setProps('iconColor') }"></span>
          <span :style="{ backgroundColor: setProps('iconColor') }"></span>
          <span :style="{ backgroundColor: setProps('iconColor') }"></span>
        </div>
      </div>

    </div>

    <!-- 漢堡展開 -->
    <div class="menu_list" @click="handle_Burger()" :class="{'menu_list-show': showMenuList}">
      <div class="link_box">
        <div class="link_item" :style="{ color: setProps('iconColor') }">
          <span v-for="(dish) in anchorMenu" :key="dish.id" class="nav_list_item" :class="{ 'nav_list_item-active': dish.isActive }" @click.prevent="handle_scrollTo(dish.title, dish.id)">{{dish.title}}</span>
        </div>
      </div>
    </div>

    <!-- 手機板 平板導覽列 -->
    <nav v-if="anchorMenu.length > 0" class="scroll_nav" :class="{ 'nav_show': isNavShow }">
      <div v-if="canNavScroll" class="nav_arrow nav_arrow-left"
      @click="handle_nav_arrow('left')">
        <i class="fa fa-chevron-left fa-1x" aria-hidden="true"></i>
      </div>
      <div class="nav_list" ref="navigator" :class="{'fix-padding': canNavScroll && !isIE}">
        <span v-for="(dish) in anchorMenu" :key="dish.id" class="nav_list_item" :class="{ 'nav_list_item-active': dish.isActive }" @click.prevent="handle_scrollTo(dish.title, dish.id)">{{dish.title}}</span>
      </div>
      <div v-if="canNavScroll" class="nav_arrow nav_arrow-right"
      @click="handle_nav_arrow('right')">
        <i class="fa fa-chevron-right fa-1x" aria-hidden="true"></i>
      </div>
    </nav>

    <div class="scrollHint" v-show="showScrollHint" ref="scrollHinter">
      <span>Tip: Shift+滾輪滾動</span>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import setProps from '@/mixin/setProps.js'
import Utils from 'udn-newmedia-utils'
import _debounce from 'lodash.debounce'
import _throttle from 'lodash.throttle'
export default {
  name: 'HeadBar',
  mixins: [setProps],
  props: {
    headColor: {
      type: String,
      default: '#fff'
    },
    jsonProps: {
      type: Object,
      default: null
    },
    iconColor: {
      type: String,
      default: '#000'
    }
  },
  data () {
    return {
      isIE: false,
      canNavScroll: false,
      header_top: 0,
      bar_color: 'transparent',
      isMenuOpen: false,
      isNavShow: false,
      showMenuList: true,
      showScrollHint: false,
      anchorIndex: 0,
      anchorScroll: 0
    }
  },
  computed: {
    ...mapGetters([
      'anchorMenu'
    ]),
    showMenu () {
      return this.anchorMenu.length ? true : false
    }
  },
  methods: {
    ...mapActions([
      'setAnchorActive',
      'resetAnchorActive'
    ]),
    handle_scroll () {
      let currentH = window.pageYOffset
      if (currentH < 2) {
        this.header_top = 0
        this.isMenuOpen === false ? this.bar_color = 'transparent' : this.bar_color = this.setProps('headColor')
        this.isNavShow = false
        this.showMenuList = false
        if (this.$slots.default !== undefined) {
          for (let i = 0; i < this.$slots.default.length; i++) {
            if (this.$slots.default[i].elm.innerHTML !== undefined && this.$slots.default[i].tag === 'a') {
              this.$slots.default[i].elm.style.backgroundColor = 'transparent'
            }
          }
        }
      } else {
        this.header_top = 2
        this.bar_color = this.setProps('headColor')
        this.isNavShow = true
        this.showMenuList = true
      }
      if (this.anchorMenu.length > 0) {
        this.handle_nav()
      }
    },
    handle_scrollTo: _throttle(function (title, id) {
      $('html, body').animate({ scrollTop: $('#' + id).offset().top - 48 }, 1333)
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "headbar",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + title + "] [HeadBar 內滾點擊]"
      })
    }, 1000, {leading: true, trailing: false}),
    handle_nav () {
      let currentH = window.pageYOffset
      let anchorOffset = $('#' + this.anchorMenu[this.anchorIndex].id).offset().top - 110
      let nextAnchorOffset = () => {
        if (this.anchorIndex < this.anchorMenu.length - 1) {
          return $('#' + this.anchorMenu[this.anchorIndex + 1].id).offset().top - 110
        } else {
          return Infinity
        }
      }
      this.resetAnchorActive()
      if (currentH > anchorOffset && currentH < nextAnchorOffset()) {
        this.setAnchorActive(this.anchorIndex)
      } else if (currentH > nextAnchorOffset()) {
        this.anchorIndex++
        this.handle_nav_scroll()
      } else if (currentH < anchorOffset && this.anchorIndex > 0) {
        this.anchorIndex--
        this.handle_nav_scroll()
      }
    },
    handle_nav_scroll: _debounce(function () {
      // 負責操作內滾List的左右滾動
      $(this.$refs.navigator).animate({ scrollLeft: this.$refs.navigator.children[this.anchorIndex].offsetLeft + 15 }, 364)
    }, 26),
    handle_nav_arrow (type) {
      switch (type) {
        case 'left':
          $(this.$refs.navigator).animate({ scrollLeft: this.$refs.navigator.scrollLeft - this.$refs.navigator.clientWidth / 5 }, 364)
          break
        case 'right':
          $(this.$refs.navigator).animate({ scrollLeft: this.$refs.navigator.scrollLeft + this.$refs.navigator.clientWidth / 5 }, 364)
          break
      }
    },
    handle_Burger: function (event) {
      if (this.isMenuOpen === false) {
        this.isMenuOpen = true
        this.bar_color = this.setProps('headColor')
      } else {
        this.isMenuOpen = false
        setTimeout(() => {
          window.pageYOffset < 2 ? this.bar_color = 'transparent' : this.bar_color = this.setProps('headColor')
        }, 444)
      }
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "hamburger",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [hamburger]"
      })
    },
    handle_resize: _debounce(function () {
      this.isMenuOpen = false
      if (this.anchorMenu.length > 0) {
        if (this.$refs.navigator.scrollWidth > (window.innerWidth / 100 * 76) && Utils.detectMob === false) {
          this.canNavScroll = true
        }
      }
    }, 333),
    handle_logoGA () {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "hamburger",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [圓形logo點擊]]"
      })
    }
  },
  created () {
    if (Utils.detectIE()) {
      Utils.detectIE() < 16 ? this.isIE = true : this.isIE = false
    }
  },
  mounted () {
    const vm = this
    window.addEventListener('scroll', this.handle_scroll)
    window.addEventListener('resize', this.handle_resize)
  },
  updated () {
    if (this.anchorMenu.length > 0) {
      if (this.$refs.navigator.scrollWidth > (window.innerWidth / 100 * 76) && this.canNavScroll === false && !Utils.detectMob()) {
        this.canNavScroll = true
      }
    }
  },
  destroyed () {
    const vm = this
    window.removeEventListener('scroll', this.handle_scroll)
    window.removeEventListener('resize', this.handle_resize)
  }
}
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 48px;
  transition: transform 222ms ease-out, height 444ms linear;
  box-shadow: 0 8px 6px -6px rgba(#a4a4a4, .3);
}
.header_open{
  height: 100vh;
  background-color: #fff;
}
.TheBar{
  position: relative;
  z-index: 50;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 48px;
}
.logo_box{
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 26%;
  }
}
.other_logo{
  max-width: 220px;
  max-height: 48px;
}
.udn-icon-logo{
  font-size: 36px;
  color: #000;
  transition: transform 288ms ease-in;
  transform: rotate(0deg);
  text-decoration: none;
  &:hover{
    transform: rotate(16deg);
  }
}
// 選單漢堡頁面
.menu_box{
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    display: none;
  }
}
.burger-icon {
  width: 46px;
  height: 46px;
  z-index: 30;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  opacity: 1;
  span {
      display: block;
      position: absolute;
      height: 4px;
      width: 30px;
      margin: 0 auto;
      background: #000;
      border-radius: 2px;
      opacity: 1;
      right: 8px;
      transform: rotate(0deg);
      transition: .455s ease-in-out;
  }
  span:nth-child(1){
      top: 12px;
      transition: .343s ease-out;
      transform-origin: right;
  }
  span:nth-child(2),
  span:nth-child(3){
      top: 21px;
  }
  span:nth-child(4){
      top: 30px;
      transition: .343s ease-out;
  }
}
.burger-open{
  span:nth-child(1){
    opacity: 0;
    transform: rotateY(90deg);
  }
  span:nth-child(2){
    transform: rotate(315deg);
  }
  span:nth-child(3){
    transform: rotate(405deg);
  }
  span:nth-child(4){
    opacity: 0;
    transform: rotateY(-90deg);
  }
}
// 選單條列
.menu_list{
  position: absolute;
  z-index: 10;
  padding-top: 48px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 1;
  background-clip: content-box;
  background-color: #fff;
  transition: height 444ms linear;
  -webkit-overflow-scrolling: auto;
  @media screen and (min-width: 375px) and (max-width: 767px) {

  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
}
.menu_list-show{
  opacity: 1;
}
.link_box{
  margin: 0;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
 @media screen and (min-width: 1024px) {
    border-top: none;
    padding: 0;
    flex-direction: row;
  }
}
.link_item{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0 15px 15px 15px;
  color: #000;
  
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    background-color: transparent;
    padding: 0;
  }
  span {
    flex-shrink: 0;
    position: relative;
    list-style: none;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    line-height: 1.4;
    color: inherit;
    transition: 222ms ease;
    border-bottom: 1px solid lightgray;
    padding: 15px;
    color: inherit;
    text-decoration: none;

    @media screen and (min-width: 1024px) {
      width: auto;
      border-bottom: none;
    }
  }
}
// Scroll Nav
.scroll_nav{
  position: absolute;
  z-index: 0;
  top: 40px;
  right: 0;
  height: 40px;
  overflow: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  transform: translate3d(0, -200%, 0);
  transition: transform 432ms ease-out;
  padding: 10px 15px;
  @media screen and (min-width: 375px) and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media screen and (min-width: 1024px) {

  }
  @media screen and (min-width: 768px) {
    top: 0px;
    left: 26%;
    height: 48px;
    z-index: 50;
    width: 76%;
  }
}
.nav_show {
  width: 100%;
  opacity: 1;
  // padding-top: 5px;
  background-color: #fff;
  transform: translate3d(0, 0, 0);
  box-shadow: 0 8px 6px -6px rgba(#a4a4a4, .3);
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) { 
    display: flex;
    justify-content: flex-end;
    box-shadow: 0 0 0 0;
    max-width: 74%;
  }
}
.nav_list{
  position: relative;
  top: 4px;
  display: flex;
  flex-direction: row;
  
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  @media screen and (min-width: 768px) {
    // width: 100%;
    overflow-x: hidden;
  }
}
.fix-padding{
  padding-bottom: 0 !important;
  overflow-x: hidden;
}
.nav_arrow {
  position: relative;
  top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  padding: 10px;
  cursor: pointer;
}
.nav_list_item {
  flex-shrink: 0;
  padding: 5px;
  color: #a4a4a4;
  font-weight: normal;
  transition: opacity 444ms ease;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
    &::after{
      content: '';
    }
  }
  @media screen and (min-width: 768px) {
    border-bottom: solid 6px transparent;
    padding: 5px 23px;
  }
  @media screen and (min-width: 1025px) {
    &:hover {
      font-weight: bold;
      color: #000;
    }
  }
}
.nav_list_item-active{
  border-bottom: solid 6px #a4a4a4;
  font-weight: bold;
  color: #000;
}
.scrollHint{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: lightgoldenrodyellow;
  font-weight: bold;
  padding: 2.5px;
  opacity: .8;
}
</style>
