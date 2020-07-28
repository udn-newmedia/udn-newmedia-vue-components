<template>
  <section class="page-indicator">
    <div
      class="page-indicator__progress"
      :style="{
        width: progressWidth,
        backgroundColor: color
      }"
    />
  </section>
</template>

<script>
import _debounce from 'lodash.debounce';
import { sendGaMethods } from '@/mixins/masterBuilder.js';

export default {
  name: 'PageIndicator',
  mixins: [sendGaMethods],
  props: {
    color: {
      type: String,
      default: '#cf0606'
    },
  },
  data() {
    return {
      ticking: false,
      readProgress: 0,
      lastStage: 0,
      stagePool: [],
    };
  },
  computed: {
    progressWidth() {
      return `${this.readProgress}%`;
    }
  },
  methods: {
    handleCalcProgress() {
      const currentHeight = window.pageYOffset;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      
      return ((currentHeight / totalHeight) * 100).toFixed(2);
    },
    handleSendGA(stage) {
      if (!document.querySelector('title')) return;
      this.sendGA({
        category: 'read',
        action: 'scroll',
        label: `page read: ${stage}%`
      });
    },
    handleUpdateStage(lastStage, newStage) {
      if (newStage < lastStage) return;
      for (let i = lastStage + 10; i <= newStage; i += 10) {
        this.stagePool.push(i);
        this.handleSendGA(i)
      }
    },
    handleScroll: _debounce(function() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.readProgress = this.handleCalcProgress();

          this.lastStage = Math.max(...this.stagePool) | 0;
          this.handleUpdateStage(this.lastStage, this.readProgress)

          this.ticking = false;
        });
      }
      this.ticking = true;
    }, 100),
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
.page-indicator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  z-index: 5000;

  .page-indicator__progress {
    position: relative;
    width: 0;
    height: 100%;
    transition: width .666s ease-out;
  }
}
</style>