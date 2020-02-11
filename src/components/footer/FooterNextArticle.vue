<template>
  <div
    class="footer-next-article"
    :style="{
      backgroundImage: 'url(' + img + ')',
    }"
  >
    <div class="footer-next-article__shadow-mask">
      <div
        :class="{
          'footer-next-article__shadow-mask__mask-left': true,
          'footer-next-article__shadow-mask__mask-left--type_2':  type === '2',

        }"
      />
      <div
        :class="{
          'footer-next-article__shadow-mask__mask-right': true,
          'footer-next-article__shadow-mask__mask-right--type_2': type === '2',
        }"
      />
    </div>
    <div class="footer-next-article__title">
      <h3>{{title}}</h3>
    </div>
    <div class="footer-next-article__text">
      <p>{{text}}</p>
    </div>
    <button class="footer-next-article__button custom-button"
      @click="test"
      name="下一篇"
    >
      <NmdButton
        :textColor="buttonStyle.textColor"
        :bgColor="buttonStyle.bgColor"
        :theme="buttonStyle.theme"
        :border="buttonStyle.border"
        :size="buttonStyle.size"
      >
        下一篇
      </NmdButton>
    </button>
  </div>
</template>

<script>
import NmdButton from '@/components/ui/NmdButton.vue';

export default {
  name: 'FooterNextArticle',
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
  },
  data() {
    return {
      buttonStyle: {
        // textColor: '',
        // bgColor: '',
        // theme: '',
        // border: '',
        size: 'l',
      }
    }
  },
  methods: {
    test() {
      console.log('test');
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.footer-next-article {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  @include pad {
    height: 480px;
  }
  @include pc {
    height: 466px;
    padding: 64px calc(50% - 360px);
  }

  .footer-next-article__shadow-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    display: none;
    @include pad {
      visibility: visible;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    @include pc {
      visibility: visible;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer-next-article__shadow-mask__mask-left {
      height: 100%;
      background-image: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,1));
      @include pad {
        width: 65%;
      }
      @include pc {
        width: 65%;
      }
      &.footer-next-article__shadow-mask__mask-left--type_2 {
        @include pc {
          width: 50%;
        }
      }
    }
    .footer-next-article__shadow-mask__mask-right {
      height: 100%;
      background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,1));
      @include pad {
        width: 35%;
      }
      @include pc {
        width: 35%;
      }
      &.footer-next-article__shadow-mask__mask-right--type_2 {
        @include pc {
          width: 50%;
        }
      }
    }
  }

  .footer-next-article__title {
    position: relative;
    margin-bottom: 20px;
    @include pc {
      
    }
    h3 {
      color: #ffffff;
    }
  }

  .footer-next-article__text {
    position: relative;
    width: 50%;
    margin-bottom: 50px;
    @include pc {
      
    }
    p {
      color: #ffffff;
    }
  }

  .footer-next-article__button {
    position: relative;
    width: 100%;
  }
}
</style>