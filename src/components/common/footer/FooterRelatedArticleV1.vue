<template>
  <article class="footer-relate-article">
    <div class="footer-relate-article__title">
      <h4>{{ title }}</h4>
    </div>
    <div class="footer-relate-article__article-wrapper">
      <div
        class="footer-relate-article__article-container"
        :style="{ width: column ? `${(230 + 8 * 2) * column}px` : '100%' }"
      >
        <a
          class="footer-relate-article__article"
          v-for="item in relatedArray"
          :href="item.href"
          target="_blank"
          rel="noopener"
          :ariaLabel="item.topic"
          :name="item.topic"
          @click="handleGA(item.topic)"
          :key="item.topic"
        >
          <div class="footer-relate-article__article__head">
            <img :src="item.img" :alt="item.topic" />
          </div>
          <div class="footer-relate-article__article__body">
            <div class="footer-relate-article__article__body__title">
              <p class="small">{{ item.topic }}</p>
            </div>
            <div class="footer-relate-article__article__body__text">
              <p class="small">{{ item.text }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="footer-relate-article__questionnaire">
      <FooterQuestionnaire href="https://www.surveycake.com/s/KpQKN" />
    </div>
  </article>
</template>

<script>
import { sendGaMethods } from "@/mixins/masterBuilder.js";
import FooterQuestionnaire from "@/components/common/footer/FooterQuestionnaire.vue";

export default {
  name: "FooterRelatedArticleV1",
  mixins: [sendGaMethods],
  components: {
    FooterQuestionnaire
  },
  props: {
    title: {
      type: String,
      default: "延伸閱讀"
    },
    relatedArray: {
      type: Array
    },
    column: {
      type: Number
    }
  },
  methods: {
    handleGA(topic) {
      this.sendGA({
        category: "related",
        action: "click",
        label: topic
      });
    }
  }
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
.footer-relate-article__article-wrapper {
  display: flex;
  justify-content: center;
}
.footer-relate-article__article-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @include pad {
    overflow: hidden;
    display: block;
    width: 100%;
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
  transition: 0.111s ease-in-out;
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
