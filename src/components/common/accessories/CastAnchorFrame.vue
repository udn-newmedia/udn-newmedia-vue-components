<template>
  <div :id="'anchor-' + title" class="cast-anchor">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CastAnchorFrame',
  props: {
    title: String
  },
  created() {
    const anchor = { title: this.title, active: false }
    this.$store.commit('ADD_ANCHOR', anchor)
  }
}
</script>
