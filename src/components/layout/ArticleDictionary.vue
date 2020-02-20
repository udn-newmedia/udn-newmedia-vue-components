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
    }
  },
  methods: {
    handleClick() {
      this.activeFlag = !this.activeFlag;
      
      if (this.activeFlag) {
        this.sendGA({
          category: 'hamburger',
          action: 'click',
          label: this.title + ' open'
        });
      } else {
        this.sendGA({
          category: 'hamburger',
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
  display: none;
  color: #999999;
  background-color: #f6f6f6;
  border-radius: 8px;
  padding: 32px 24px;
  margin: 32px 0;
  transition: 1s ease-in-out;
  @include pad {
    padding: 32px 72px;
  }
  @include pc {
    padding: 32px 72px;
  }
  &.article-dictionary__description--active {
    display: block;
    animation: appear .333s ease-in-out forwards;
    @keyframes appear {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
}
</style>