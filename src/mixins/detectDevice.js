/**
* mixin in main.js for listening resize event.
*/

import _debounce from 'lodash.debounce';

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
        case (769 <= w && w <= 1024):
          return 'pad';
          break;
        default:
          return 'pc';
          break;
      }
    }
  },
  methods: {
    handleResize: _debounce(function() {
      this.windowWidth = window.innerWidth;
    }, 100)
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
}

export default _detectDevice