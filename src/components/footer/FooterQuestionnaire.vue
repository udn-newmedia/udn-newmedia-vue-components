<template>
  <a
    class="footer-questionnaire"
    target="_blank"
    :href="href"
    aria-label="next-article"
    name="next-article"
    @click="sendGA(formatGA('FooterQuestoinnaire'))"
  >
    <button
      class="footer-questionnaire__button"
      aria-label="next-article"
      name="下一篇"
    >
      <NmdButton
        :textColor="buttonStyle.textColor"
        :bgColor="buttonStyle.bgColor"
        :theme="buttonStyle.theme"
        :border="buttonStyle.border"
        :size="buttonStyle.size"
      >
        {{text}}
      </NmdButton>
    </button>
  </a>
</template>

<script>
import NmdButton from '@/components/pinhead/NmdButton.vue';
import { sendGaMethods } from "@/mixins/masterBuilder.js";

export default {
  name: 'FooterQuestionnaire',
  mixins: [sendGaMethods],
  components: {
    NmdButton
  },
  props: {
    href: {
      type: String,
      default: 'https://www.surveycake.com/s/KpQKN'
    },
    text: {
      type: String,
      default: '請填寫閱讀體驗問卷'
    },
  },
  data() {
    return {
      buttonStyle: {
        // textColor: '',
        // bgColor: '',
        // theme: '',
        // border: '',
        size: 'xl',
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.footer-questionnaire {
  position: relative;
  display: block;
  width: 295px;
  margin: 0 auto;
  text-align: center;
  @include clean-tap;
  @include pc {
    width: 576px;
  }
}
.footer-questionnaire__button {
  position: relative;
  width: 100%;
  @include clean-btn;
}
</style>