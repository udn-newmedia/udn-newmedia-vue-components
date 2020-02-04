/**
* mixin in main.js for listening resize event.
*/

import _debounce from 'lodash.debounce';

const _detectDevice = {
  methods: {
    handleResize: _debounce(function() {
      this.$store.dispatch('updateWindowWidth', window.innerWidth);
    }, 100),
  },
  mounted() {
    window.addEventListener('resize', this.handleResize, true);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize, true);
  },
}

export default _detectDevice