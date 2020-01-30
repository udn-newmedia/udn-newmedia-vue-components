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
      const w = this.windowWidth;
      switch (true) {
        case (w < 768):
          return 'mob';          
          break;
        case (769 <= w <= 1024):
          return'pad';
          break;
        default:
          return 'pc';
          break;
      }
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