<template>
  <span class="article-dictionary">
    <button
      class="article-dictionary__button"
      @click="handleClick()"
      aria-label="explanation"
      name="explanation"
    >
      {{name}}
    </button>
    <br v-if="breakFlag">
    <div
      :class="{
        'article-dictionary__description': true,
        'article-dictionary__description--active': activeFlag,
      }"
    >
      <slot />
    </div>
  </span>
</template>

<script>
import { sendGaMethods } from '@/mixins/masterBuilder.js';
export default {
  name: 'ArticleDictionary',
  mixins: [sendGaMethods],
  props: {
    name: {
      type: String,
      default: '解釋'
    },
    title: { // for ga
      type: String,
      default: 'dictionary'
    }
  },
  data() {
    return {
      activeFlag: false,
      breakFlag: false,
    }
  },
  methods: {
    handleClick() {
      this.activeFlag = !this.activeFlag;
      setTimeout(() => {
        this.breakFlag = !this.breakFlag;
      }, 111);
      
      if (this.activeFlag) {
        this.sendGA({
          category: 'dictionary',
          action: 'click',
          label: this.title + ' open'
        });
      } else {
        this.sendGA({
          category: 'dictionary',
          action: 'click',
          label: this.title + ' close'
        });
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.article-dictionary__button {
  @include clean-btn;
  display: inline-block;
  font-size: 0.9rem;
  padding: 1px 5px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: #f3f3f3;
  color: #959595;
  cursor: pointer;
}
.article-dictionary__description {
  overflow: hidden;
  display: inline-block;
  color: #999999;
  background-color: #f6f6f6;
  border-radius: 8px;
  opacity: 0;
  padding: 0;
  margin: 0;
  width: 0;
  height: 0;
  transition: .111s ease-in-out;
  &.article-dictionary__description--active {
    display: block;
    width: 100%;
    padding: 32px 24px;
    margin: 32px 0;
    @include pad {
      padding: 32px 72px;
    }
    @include pc {
      padding: 32px 72px;
    }
    animation: grow .333s .111s ease-in-out forwards;
    @keyframes grow {
      0% {
        opacity: 0;
        height: auto;
      }
      100% {
        opacity: 1;
        height: auto;
      }
    }
  }
}
</style>