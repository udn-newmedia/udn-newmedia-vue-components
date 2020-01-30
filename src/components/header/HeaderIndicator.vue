<template>
  <div class="header-indicator">
    <div
      class="header-indicator__progress"
      :style="{
        width: progressWidth,
        backgroundColor: color
      }"
    />
  </div>
</template>

<script>
import _debounce from 'lodash.debounce';
import sendGaMethods from "@/mixins/sendGaMethods.js";

export default {
  name: 'HeaderIndicator',
  mixins: [sendGaMethods],
  props: {
    color: {
      type: String,
      default: '#bf2923'
    },
  },
  data() {
    return {
      readProgress: 0,
      currentStage: 0,
    };
  },
  computed: {
    progressWidth() {
      return this.readProgress + '%';
    }
  },
  methods: {
    handleScroll: _debounce(function() {
      let currentHeight = window.pageYOffset;
      let totalHeight = document.body.scrollHeight - window.innerHeight;
      this.readProgress = ((currentHeight / totalHeight) * 100).toFixed(2);

      const progress = Math.floor(this.readProgress / 10);
      if (progress > this.currentStage) {
        this.currentStage = progress;
        this.sendGA({
          category: 'read',
          action: 'scroll',
          label: 'page read: ' + (this.currentStage * 10) + '%'
        });
      }
    }, 10),
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
  },
}
</script>

<style lang="scss" scoped>
.header-indicator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 5000;

  .header-indicator__progress {
    position: relative;
    width: 0;
    height: 100%;
    transition: width .666s ease-out;
  }
}
</style>