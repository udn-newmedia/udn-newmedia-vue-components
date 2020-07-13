<template>
  <article class="footer-relate-article">
    <div class="footer-relate-article__title">
      <h4>{{title}}</h4>
    </div>
    <div class="footer-relate-article__article-container">
      <a
        class="footer-relate-article__article"
        :href="href1"
        target="_blank"
        rel="noopener"
        :ariaLabel="title1"
        :name="title1"
        @click="handleGA(title1)"
      >
        <div class="footer-relate-article__article__head">
          <img :src="img1" :alt="title1">
        </div>
        <div class="footer-relate-article__article__body">
          <div class="footer-relate-article__article__body__title">
            <p class="small">{{title1}}</p>
          </div>
          <div class="footer-relate-article__article__body__text">
            <p class="small">{{text1}}</p>
          </div>
        </div>
      </a>
      <a
        class="footer-relate-article__article"
        :href="href2"
        target="_blank"
        rel="noopener"
        :ariaLabel="title2"
        :name="title2"
        @click="handleGA(title2)"
      >
        <div class="footer-relate-article__article__head">
          <img :src="img2" :alt="title2">
        </div>
        <div class="footer-relate-article__article__body">
          <div class="footer-relate-article__article__body__title">
            <p class="small">{{title2}}</p>
          </div>
          <div class="footer-relate-article__article__body__text">
            <p class="small">{{text2}}</p>
          </div>
        </div>
      </a>
      <a
        class="footer-relate-article__article"
        :href="href3"
        target="_blank"
        rel="noopener"
        :ariaLabel="title3"
        :name="title3"
        @click="handleGA(title3)"
      >
        <div class="footer-relate-article__article__head">
          <img :src="img3" :alt="title3">
        </div>
        <div class="footer-relate-article__article__body">
          <div class="footer-relate-article__article__body__title">
            <p class="small">{{title3}}</p>
          </div>
          <div class="footer-relate-article__article__body__text">
            <p class="small">{{text3}}</p>
          </div>
        </div>
      </a>
      <a
        class="footer-relate-article__article"
        :href="href4"
        target="_blank"
        rel="noopener"        
        :ariaLabel="title4"
        :name="title4"
        @click="handleGA(title4)"
      >
        <div class="footer-relate-article__article__head">
          <img :src="img4" :alt="title4">
        </div>
        <div class="footer-relate-article__article__body">
          <div class="footer-relate-article__article__body__title">
            <p class="small">{{title4}}</p>
          </div>
          <div class="footer-relate-article__article__body__text">
            <p class="small">{{text4}}</p>
          </div>
        </div>
      </a>
    </div>
    <div class="footer-relate-article__questionnaire">
      <FooterQuestionnaire href="https://www.surveycake.com/s/KpQKN" />
    </div>
  </article>
</template>

<script>
import { sendGaMethods } from "@/mixins/masterBuilder.js";
import FooterQuestionnaire from '@/components/footer/FooterQuestionnaire.vue';

export default {
  name: 'FooterRelateArticle',
  mixins: [sendGaMethods],
  components: {
    FooterQuestionnaire
  },
  props: {
    title: {
      type: String,
      default: '延伸閱讀'
    },
    href1: {
      type: String,
      required: true,
    },
    img1: {
      type: String,
      required: true,
    },
    title1: {
      type: String,
      required: true,
    },
    text1: {
      type: String,
      default: '',
    },
    href2: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
      default: '',
    },
    href3: {
      type: String,
      required: true,
    },
    img3: {
      type: String,
      required: true,
    },
    title3: {
      type: String,
      required: true,
    },
    text3: {
      type: String,
      default: '',
    },
    href4: {
      type: String,
      required: true,
    },
    img4: {
      type: String,
      required: true,
    },
    title4: {
      type: String,
      default: '',
    },    
    text4: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleGA(title) {
      this.sendGA({
        category: 'related',
        action: 'click',
        label: title
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-relate-article {
  position: relative;
  display: block;
  background-color: #f5f7f9;
  padding: 64px 15px 64px 15px;
  text-align: left;
  @include pad {
    text-align: center;
    padding: 72px 96px 72px 96px;
  }
  @include pc {
    text-align: center;
    padding: 72px 15px 72px 15px;
  }

  .footer-relate-article__title {
    width: 295px;
    margin: 0 auto 24px auto;
    @include pc {
      width: auto;
      margin: 0 auto 16px auto;
    }
  }
}
.footer-relate-article__article-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @include pad {
    overflow: hidden;
    display: block;
    width: 100%;;
  }
  @include pc {
    align-items: flex-start;
    flex-direction: row;
  }
}
.footer-relate-article__article {
  position: relative;
  overflow: hidden;
  width: 295px;
  margin-bottom: 16px;
  border-radius: 15px;
  outline: none;
  text-decoration: none;
  transition: .111s ease-in-out;
  cursor: pointer;
  @include pad {
    display: block;
    float: left;
    width: calc(50% - 8px);
    &:nth-child(odd) {
      margin-right: 16px;
    }
  }
  @include pc {
    width: 230px;
    margin: 8px;
  }
  &:hover {
    transform: translateY(-4px);
  }
  .footer-relate-article__article__head {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 168px;
    @include pc {
      height: 145px;
    }
    img {
      object-fit: cover;
      width: 100%;
      min-height: 100%;
    }
  }
  .footer-relate-article__article__body {
    position: relative;
    padding: 24px 32px;
    text-align: justify;
    background-color: #ffffff;
    @include pc {
      padding: 24px;
    }
    .footer-relate-article__article__body__title {
      font-weight: bold;
      margin-bottom: 8px;
      @include pc {
        margin-bottom: 0;
      }
      p {
        color: #131313;
      }
    }
    .footer-relate-article__article__body__text {
      @include pad {
        display: none;
      }
      @include pc {
        display: none;
      }
      p {
        color: #a6adb4;
      }
    }
  }

  .footer-relate-article__questionnaire {
    position: relative;
    width: 100%;
    height: 50px;
    margin-top: 24px;
  }
}
</style>