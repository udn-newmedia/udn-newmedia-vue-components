const _detectDevice = {
  computed: {
    deviceType() {
      return this.$root.deviceType;
    }
  },
  watch: {
    deviceType: function(value) {
      this.$forceUpdate();
    }
  }
}

export default _detectDevice