<template>
  <div :id="'anchor-' + title" />
</template>

<script>
export default {
  name: 'CastAnchor',
  props: {
    title: String,
  },
  created() {
    const anchor = { title: this.title, active: false };
    this.$anchorList.push(anchor);
  },
}
</script>