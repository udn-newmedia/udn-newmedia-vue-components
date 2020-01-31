<template>
  <div class="cast-anchor" :id="'anchor-' + title" />
</template>

<script>
export default {
  name: 'CastAnchor',
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