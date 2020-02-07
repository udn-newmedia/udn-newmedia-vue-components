<template>
  <div class="fb-comment-block article">
    <div
      class="fb-comments"
      :data-href="href"
      data-numposts="5"
      data-width="100%"
      data-order-by="reverse_time"
    />
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: window.location.href,
    },
  },
  name: 'FooterFbComment',
}
</script>

<style lang="scss" scoped>
.fb-comment-block {
  position: relative;
}
</style>