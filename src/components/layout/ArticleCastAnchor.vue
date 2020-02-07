<template>
  <div :id="'anchor-' + title" />
</template>

<script>
export default {
  name: 'ArticleCastAnchor',
  props: {
    title: String,
  },
  mounted() {
    const anchor = {
      title: this.title,
      active: false,
      position: document.getElementById('anchor-' + this.title).offsetTop,
    };
    this.$store.dispatch('addAnchor', anchor);
  },
}
</script>