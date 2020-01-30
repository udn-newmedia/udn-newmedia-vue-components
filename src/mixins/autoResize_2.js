const _detectDevice = {
  computed: {
    isMob() {
      return this.$root.isMob;
    }
  },
  watch: {
    isMob: function(value) {
      this.$forceUpdate();
    }
  }
}

export default _detectDevice