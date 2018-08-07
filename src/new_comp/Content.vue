<template>
  <Article class="article_container">
    <div class="article">
      <slot></slot>
    </div>
  </Article>
</template>

<script>
export default {
  name: 'ContentContainer'
}
</script>

<style lang="scss" scoped>
.article_container{
  position: relative;
  z-index: 50;
  width: 100%;
  padding: 64px 15px;
  margin: 0 auto;
  background-color: #fff;
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 64px 100px;
  }
  @media screen and (min-width: 1024px) {
    padding: 84px 0;
  }
}
.article{
  position: relative;
  z-index: 30;
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 880px;
    margin: 0 auto;
  }
}
</style>
