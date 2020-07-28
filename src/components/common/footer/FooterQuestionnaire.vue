<template>
  <a
    class="footer-questionnaire"
    target="_blank"
    :href="href"
    aria-label="next-article"
    name="next-article"
    @click="sendGA(formatGA('FooterQuestoinnaire'))"
  >
    <NmdButton :size="buttonStyle.size">
      {{text}}
    </NmdButton>
  </a>
</template>

<script>
import NmdButton from '@/components/common/accessories/NmdButton.vue';
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
        size: 'xl',
      }
    }
  },
};
</script>

<style lang="scss" scoped>
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
</style>