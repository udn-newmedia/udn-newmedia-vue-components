<template>
  <div :id="'anchor-' + title" class="cast-anchor" />
</template>

<script>
export default {
  name: 'CastAnchor',
  props: {
    title: String
  },
  created() {
    const anchor = { title: this.title, active: false }
    this.$store.commit('ADD_ANCHOR', anchor)
  }
}
</script>
