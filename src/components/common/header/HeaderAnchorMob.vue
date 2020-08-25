<template>
  <div id="header-anchor" class="header-anchor">
    <span
      v-if="anchorListArranged"
      class="anchor-button active"
      @click="openMenu(anchorListArranged.button)"
    >
      {{anchorListArranged.button.title}}
      <i
        :class="{
                  'haeder-bar__menu-button__arrow': true,
                  'haeder-bar__menu-button__arrow--white': theme === 'dark',
                  'haeder-bar__menu-button__arrow--black': theme === 'light',
                  'haeder-bar__menu-button__arrow--up': isOpen,
                  'haeder-bar__menu-button__arrow--down': !isOpen,
                }"
      />
    </span>
    <ul
      id="header-anchor-list"
      class="header-anchor__list anchor-menu"
      :class="{'header-anchor__list-active':isOpen}"
    >
      <li
        :class="{
          'header-anchor__list__item': true,
          'header-anchor__list__item--active': item.active,
          'header-anchor__list__item--dark': theme === 'dark',
          'header-anchor__list__item--light': theme === 'light',
          'header-anchor__list__item-active':isOpen
        }"
        :style="{top:isOpen ? `${16+index*56}px` : '-150px','border-top':index=== 0 &&'solid 1px rgb(230, 230, 230)'}"
        v-for="(item, index) in anchorListArranged.result"
        :key="index"
        :id="'header-anchor-' + item.title"
        @click="handleScrollVert(item.title)"
      >
        <p class="small">{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { autoResize_2, sendGaMethods } from '@/mixins/masterBuilder.js'
import vueScrollTo from 'vue-scrollto'

export default {
  name: 'HeaderAnchorMob',
  mixins: [autoResize_2, sendGaMethods],
  props: {
    theme: {
      type: String,
    },
    activeFlag: {
      type: Boolean,
    },
  },
  data() {
    return {
      anchorList: null,
      isOpen: false,
    }
  },
  methods: {
    handleScrollVert(index) {
      this.isOpen = false
      vueScrollTo.scrollTo('#anchor-' + index)
      this.sendGA({
        category: 'anchor',
        action: 'click',
        label: index,
      })
    },
    handleScrollHorz(index) {
      const anchorList = document.getElementById('header-anchor')
      const anchor = document.getElementById('header-anchor-' + index)
      if (anchor) {
        anchorList.scrollTo({
          left: anchor.offsetLeft,
          behavior: 'smooth',
        })
      }
    },
    handleScroll() {
      const list = this.anchorList

      for (let i = list.length - 1; i >= 0; i--) {
        const pos = document
          .getElementById('anchor-' + list[i].title)
          .getBoundingClientRect().top
        if (pos < 1) {
          this.handleUpdateAnchor(i, true)
          for (let j = 0; j < list.length; j++) {
            if (j !== i) this.handleUpdateAnchor(j, false)
          }
          break
        }
      }
    },
    handleUpdateAnchor(index, status) {
      this.anchorList[index].active = status
    },
    handleAnchorScroll() {},
    openMenu(button) {
      if (button.activeExisting === false) {
        this.handleScrollVert(button.title)
      }

      this.isOpen = !this.isOpen
    },
    intersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }

      const callback = (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            for (let i = 0; i < this.anchorList.length; i++) {
              if (entry.target.id.indexOf(this.anchorList[i].title) !== -1) {
                this.handleUpdateAnchor(i, true)
              } else {
                this.handleUpdateAnchor(i, false)
              }
            }
          }
        })
      }

      const observer = new IntersectionObserver(callback, options)

      return observer
    },
  },
  watch: {
    anchorList: {
      handler(list) {
        if (this.isMob) {
          if (!this.onScollingFlag) {
            list.forEach((e) => {
              if (e.active) {
                this.handleScrollHorz(e.title)
              }
            })
          }
        }
      },
      deep: true,
    },
    activeFlag: function () {
      if (this.activeFlag) {
        this.isOpen = false
      }
    },
  },
  computed: {
    anchorListArranged() {
      const result = []
      let button = {}
      let activeExisting = false

      if (!this.anchorList) {
        return { result: this.anchorList, button }
      }

      for (let i = 0; i < this.anchorList.length; i++) {
        if (this.anchorList[i].active) {
          activeExisting = true
        }
      }

      if (activeExisting) {
        for (let i = 0; i < this.anchorList.length; i++) {
          if (this.anchorList[i].active) {
            button = this.anchorList[i]
          }
        }
        for (let i = 0; i < this.anchorList.length; i++) {
          if (!this.anchorList[i].active) {
            result.push(this.anchorList[i])
          }
        }
      } else {
        for (let i = 0; i < this.anchorList.length; i++) {
          if (i === 0) {
            button = { ...this.anchorList[i], activeExisting }
          } else {
            result.push(this.anchorList[i])
          }
        }
      }
      return { result, button }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.anchorList = this.$anchorList
    })
    // window.addEventListener('scroll', this.handleScroll, false)

    const targets = document.querySelectorAll('.cast-anchor')
    targets.forEach((target) => {
      this.intersectionObserver().observe(target)
    })
  },
  destroyed() {
    // window.removeEventListener('scroll', this.handleScroll, false)
  },
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.header-anchor {
  position: relative;
  // overflow-x: auto;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  -ms-overflow-style: none;
  &.header-anchor::-webkit-scrollbar {
    display: none;
  }
}
li,
ul {
  list-style: none;
}
.header-anchor__list {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding-left: 0px;
  z-index: -1;
  // transition: all 0.5s;
  // transform: translateY(-100%);
  // &.header-anchor__list-active {
  //   transform: translateY(0%);
  // }

  .header-anchor__list__item {
    z-index: -1;
    padding-left: 31px;
    background-color: #ffffff;
    border-bottom: solid 1px rgb(230, 230, 230);
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    height: 100%;
    width: 100vw;
    height: 56px;
    margin-right: 20px;
    transition: 0.33s ease-in-out;
    cursor: pointer;
    @include clean-tap;
    &.header-anchor__list__item--dark {
      p {
        color: #999999;
      }
    }
    &.header-anchor__list__item--light {
      p {
        color: #c4c4c4;
      }
    }

    &.header-anchor__list__item--active {
      // font-weight: bold;
      // border-bottom: solid 2px;
      &.header-anchor__list__item--dark {
        border-color: #cf0606;
        p {
          color: #ffffff;
        }
      }
      &.header-anchor__list__item--light {
        border-color: #121212;
        p {
          color: #121212;
        }
      }
    }
  }
}
.haeder-bar__menu-button__arrow {
  border-style: solid;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 3px;
  transition: 0.333s ease-in-out;

  &.haeder-bar__menu-button__arrow--white {
    border-color: #ededed;
  }
  &.haeder-bar__menu-button__arrow--black {
    border-color: #121212;
  }

  &.haeder-bar__menu-button__arrow--up {
    transform: translateY(1px) rotate(-135deg);
  }
  &.haeder-bar__menu-button__arrow--down {
    transform: translateY(-2px) rotate(45deg);
  }
}
.haeder-bar__menu-button__split {
  margin-left: 15px;
}
.anchor-button {
  font-size: 0.875rem;
  &.active {
    padding-left: 31px;
  }
}
// .anchor-menu {
//   transition: all 0.5s;
//   transform: translateY(-200%);
//   &.active {
//     transform: translateY(0);
//   }
// }
</style>