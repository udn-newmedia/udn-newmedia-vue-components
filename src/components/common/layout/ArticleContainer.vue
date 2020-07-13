<template>
  <section class="article-container"
    :style="{
      backgroundColor: bgColor,
    }"
  >
    <article class="article">
      <slot />
    </article>
  </section>
</template>

<script>
export default {
  name: 'ArticleContainer',
  props: {
    bgColor: {
      type: String,
      default: '#ffffff',
    },
  },
}
</script>

<style lang="scss" scoped>
.article-container {
  position: relative;
  width: 100%;
}
</style>