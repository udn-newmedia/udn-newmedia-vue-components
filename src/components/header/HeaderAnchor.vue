<template>
  <div id="header-anchor" class="header-anchor">
    <li id="header-anchor-list" class="header-anchor__list">
      <ul
        :class="{
          'header-anchor__list__item': true,
          'header-anchor__list__item--active': item.active,
        }"
        v-for="(item, index) in anchorList"
        :key="index"
        :id="'header-anchor-' + item.title"
        @click="handleScrollVert(item.title)"
      >
        <p
          :class="{
            'small': true,
            'white': theme === 'dark',
          }"
        >
          {{item.title}}
        </p>
      </ul>
    </li>
  </div>
</template>

<script>
import sendGaMethods from "@/mixins/sendGaMethods.js";
import { scroller } from 'vue-scrollto/src/scrollTo';
const ScrollToVert = scroller();
const ScrollToHorz = scroller();

export default {
  name: 'HeaderAnchor',
  mixins: [sendGaMethods],
  props: {
    theme: {
      type: String,
    },
  },
  data() {
    return {
      scrollToVertOption: {
        container: 'body',
        duration: 800,
        x: false,
        y: true
      },
      scrollToHorzOption: {
        el: '#header-anchor-list',
        container: '#header-anchor',
        duration: 333,
        x: true,
        y: false
      },
    }
  },
  methods: {
    handleScrollVert(index) {
      ScrollToVert('#anchor-' + index, this.scrollToVertOption);
    },
    handleScrollHorz(index) {
      ScrollToHorz('#header-anchor-' + index, this.scrollToHorzOption);
    }
  },
  computed: {
    anchorList() {
      const list = this.$store.state.anchorList;
      list.forEach((e, i) => {
        if (e.active) this.handleScrollHorz(e.title);
      });
      
      return list;
    }
  },
}
</script>

<style lang="scss" scoped>
.header-anchor {
  position: relative;
  overflow-x: auto;
  width: calc(100% - 100px);
  height: 100%;
  margin: 0 auto;
}
li, ul {
  list-style: none;
}
.header-anchor__list {
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  padding-right: 50px;
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
    &.header-anchor__list__item--active {
      // font-weight: bold;
      border-bottom: solid 2px #cf0606;
    }
  }
}
</style>