<template>
  <div class="article-quote"
    :style="{
      borderTopColor: borderColor,
      borderBottomColor: borderColor
    }"
  >
    <div class="article-quote__upper-section">
      <div v-if="img" class="article-quote__profile">
        <img :src="img" :alt="text">
      </div>
      <div v-if="text" class="article-quote__text">
        <p>{{text}}</p>
      </div>
    </div>
    <div v-if="refer" class="article-quote__down-section">
      <div class="article-quote__refer">
        <p class="small">—— {{refer}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleQuote',
  props: {
    borderColor: {
      type: String,
      default: '#dcdddd',
    },
    img: {
      type: String
    },
    refer: {
      type: String
    },
    text: {
      type: String
    },
    color: {
      type: String
    }
  },
}
</script>

<style lang="scss" scoped>
.article-quote {
  position: relative;
  width: 100%;
  padding: 35px 0;
  border-top: solid 1px #dcdddd;
  border-bottom: solid 1px #dcdddd;
  @include layout-margin;
  @include pc {
    padding: 50px 0;
  }

  .article-quote__upper-section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include pad {
      flex-direction: row;
    }
    @include pc {
      flex-direction: row;
    }
    .article-quote__profile {
      flex-shrink: 0;
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 19px;
      display: flex;
      justify-content: center;
      align-items: center;
      @include pad {
        margin-right: 18px;
        margin-bottom: 0;
      }
      @include pc {
        margin-right: 18px;
        margin-bottom: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .article-quote__text {
      p {
        margin: 0;
        color: #888888;
      }
    }
  }

  .article-quote__down-section {
    .article-quote__refer {
      margin-top: 18px;
      p {
        margin: 0;
        color: #888888;
        text-align: right;
      }
    }
  }
}
</style>