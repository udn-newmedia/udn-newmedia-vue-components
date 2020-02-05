<template>
  <div class="loading-anim"
    :class="{
      'loading-anim--ready': loadingState
    }"
  >
    <div class="loading-anim__icon"
      :class="{
        'loading-anim__icon--loading': !loadingState
      }"
    >
      <UdnLogo />
    </div>
    <div class="loading-anim__shadow"
      :class="{
        'loading-anim__shadow--loading': !loadingState
      }"
    />
  </div>
</template>

<script>
import UdnLogo from '@/components/ui/UdnLogo.vue';

export default {
  name: 'LoadingAnim.vue',
  components: {
    UdnLogo,
  },
  data() {
    return {
      readyState: 'loading',
    }
  },
  computed: {
    loadingState() {
      if (this.readyState === 'interactive' || this.readyState === 'complete') return true;
      return false;
    },
  },  
  mounted() {
    document.onreadystatechange = () => {
      this.readyState = document.readyState;
    }
  },
};
</script>

<style lang="scss" scoped>
.loading-anim {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  background-color: #ffffffee;
  .loading-anim__icon {
    position: relative;
    width: 35px;
    height: 35px;
    animation: bounce 1.25s ease-in-out 2;
    &.loading-anim__icon--loading {
      animation: bounce 1.25s ease-in-out infinite;
    }
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
  .loading-anim__shadow {
    position: relative;
    width: 37px;
    height: 8px;
    border-radius: 50%;
    background-color: #00000088;
    transition: opacity .333s ease-in-out;
    animation: shadow 1.25s ease-in-out 2;
    &.loading-anim__shadow--loading {
      animation: shadow 1.25s ease-in-out infinite;
    }
    @keyframes shadow {
      0% {
        background-color: rgba($color: #000000, $alpha: 0.5);
        transform: scale(1);
      }
      50% {
        background-color: rgba($color: #000000, $alpha: 0.35);
        transform: scale(0.75, 0.5);
      }
      100% {
        background-color: rgba($color: #000000, $alpha: 0.5);
        transform: scale(1);
      }
    }
  }
  &.loading-anim--ready {
    top: 0;
    left: 0;
    animation: fade-out 1s linear forwards;
    @keyframes fade-out {
      0% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        visibility: hidden;
        display: none;
      }
    }
  }
}
</style>