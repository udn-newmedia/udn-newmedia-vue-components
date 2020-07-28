<template>
  <article
    :class="{
      'footer-next-article': true,
      'footer-next-article--type-1': type === '1',
      'footer-next-article--type-2': type === '2',
    }"
    :style="{
      backgroundImage: 'url(' + img + ')',
    }"
  >
    <div :class="{
      'footer-next-article__content': true,
      'footer-next-article__content--type-2': type === '2',
      }"
    >
      <div
        :class="{
          'footer-next-article__content__title': true,
          'footer-next-article__content__title--type-2': type === '2'
        }"
      >
        <h3>{{title}}</h3>
      </div>
      <div
        v-if="type === '1'"
        class="footer-next-article__content__text"
      >
        <p>{{text}}</p>
      </div>
      <a
        :href="href"
        target="_self"
        rel="noopener"
      >
        <NmdButton
          :textColor="buttonStyle.textColor"
          :bgColor="buttonStyle.bgColor"
          :theme="buttonStyle.theme"
          :border="buttonStyle.border"
          :size="buttonStyle.size"
          :extendWidth="buttonStyle.extendWidth"
          ariaLabel="下一篇"
          name="下一篇"
          :clickEvent="handleGA"
        >
          下一篇
        </NmdButton>
      </a>
    </div>
  </article>
</template>

<script>
import { sendGaMethods } from "@/mixins/masterBuilder.js";
import NmdButton from '@/components/common/accessories/NmdButton.vue';

export default {
  name: 'FooterNextArticle',
  mixins: [sendGaMethods],
  components: {
    NmdButton
  },
  props: {
    type: {
      type: String,
      default: '1'
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
    },
    img: {
      type: String,
    },
    href: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      buttonStyle_1: {
        size: 'l',
        extendWidth: true
      },
      buttonStyle_2: {
        textColor: '#f6f6f6',
        theme: 'outlined',
        size: 'l',
        extendWidth: true
      },
    }
  },
  computed: {
    buttonStyle() {
      if (this.type === '2') return this.buttonStyle_2;
      return this.buttonStyle_1;
    }
  },
  methods: {
    handleGA() {
      this.sendGA({
        category: 'next',
        action: 'click',
        label: this.title + '_next'
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.footer-next-article {
  position: relative;
  width: 100%;
  height: 466px;
  display: flex;
  flex-direction: column;
  
  padding: 32px 24px;
  background-position: center;
  // background-size: auto 100%;
  background-size: cover;
  background-repeat: no-repeat;
  &.footer-next-article--type-1 {
    justify-content: flex-end;
    align-items: center;
  }
  &.footer-next-article--type-2 {
    justify-content: center;
    align-items: center;
  }
  @include pad {
    height: 480px;
    padding: 64px 0;
  }
  @include pc {
    padding: 64px 0;
  }

  .footer-next-article__content {
    width: 100%;
    @include pad {
      width: 576px;
    }
    @include pc {
      width: 720px;
    }
    &.footer-next-article__content--type-2 {
      @include pad {
        width: 400px;
      }  
      @include pc {
        width: 400px;
      }
    }
  }

  .footer-next-article__content__title {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    h3 {
      color: #ffffff;
    }
    &.footer-next-article__content__title--type-2 {
      h3 {
        text-align: center;
      }
    }
  }

  .footer-next-article__content__text {
    position: relative;
    width: 70%;
    margin-bottom: 50px;
    p {
      color: #ffffff;
    }
  }
}
</style>