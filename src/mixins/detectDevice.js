const _detectDevice = {
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isMob: function() {
      return this.windowWidth < 768 ? true : false;
    },
    deviceType: function() {

    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
}

export default _detectDevice