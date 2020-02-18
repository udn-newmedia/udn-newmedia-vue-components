<template>
  <div id="header-anchor" class="header-anchor">
    <ul id="header-anchor-list" class="header-anchor__list">
      <li
        :class="{
          'header-anchor__list__item': true,
          'header-anchor__list__item--active': item.active,
          'header-anchor__list__item--dark': theme === 'dark',
          'header-anchor__list__item--light': theme === 'light',
        }"
        v-for="(item, index) in anchorList"
        :key="index"
        :id="'header-anchor-' + item.title"
        @click="handleScrollVert(item.title)"
      >
        <p
          :class="{
            'small': true,
          }"
        >
          {{item.title}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { autoResize_2, sendGaMethods } from '@/mixins/masterBuilder.js';
import vueScrollTo from 'vue-scrollto';

export default {
  name: 'HeaderAnchor',
  mixins: [autoResize_2, sendGaMethods],
  props: {
    theme: {
      type: String,
    },
  },
  data() {
    return {
      onScollingFlag: false,
    }
  },
  methods: {
    handleScrollVert(index) {
      this.onScollingFlag = false;
      vueScrollTo.scrollTo('#anchor-' + index);
      this.sendGA({
        category: 'anchor',
        action: 'click',
        label: index
      })
    },
    handleScrollHorz(index) {
      const anchorList = document.getElementById('header-anchor');
      const anchor = document.getElementById('header-anchor-' + index);
      anchorList.scrollTo({
        left: anchor.offsetLeft,
        behavior: 'smooth',
      });
      this.onScollingFlag = true;
      setTimeout(() => {
        this.onScollingFlag = false;
      }, 666);
    }
  },
  computed: {
    anchorList() {
      return this.$store.state.anchorList;
    }
  },
  watch: {
    anchorList: {
      handler(list) {
        if (this.isMob) {
          if (!this.onScollingFlag) {
            list.forEach((e) => {
              if (e.active) {
                this.handleScrollHorz(e.title);
              }
            });
          }
        }
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.header-anchor {
  position: relative;
  overflow-x: auto;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  -ms-overflow-style: none;
  &.header-anchor::-webkit-scrollbar {
    display: none;
  }
}
li, ul {
  list-style: none;
}
.header-anchor__list {
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  .header-anchor__list__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    height: 100%;
    margin-right: 20px;
    border-bottom: solid 2px #cf060600;
    transition: .333s ease-in-out;
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
      border-bottom: solid 2px;
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
</style>