<template>
  <section
    class="page-cover"
    @click="clickTest"
    :style="{
      backgroundImage: 'url(' + seletcSRCByDevice(srcMob, srcPad, srcPc) + ')'
    }"
  >
    <div
      :class="{
        'page-cover__title': true
      }"
      :style="{
        transform: titleTranslate,
        color: textColor,
        writingMode: titleWritingMode
      }"
    >
      <slot />
    </div>
    <div class="page-cover__arrow" @click="handleScroll">
      <NmdArrow />
    </div>
    <div class="page-cover__enter-anchor" id="enter-anchor" />
  </section>
</template>

<script>
import NmdArrow from '@/components/common/accessories/NmdArrow.vue'
import vueScrollTo from 'vue-scrollto'
import { computed } from 'vue'

import useRWDMethods from '@/compositionAPI/useRWDMethods'
import useGA from '@/compositionAPI/useGA'

export default {
  name: 'PageCover',
  components: {
    NmdArrow
  },
  props: {
    srcMob: {
      type: String
    },
    srcPad: {
      type: String
    },
    srcPc: {
      type: String
    },
    useAnimate: {
      type: String,
      default: 'true'
    },
    useArrow: {
      type: String,
      default: 'true'
    },
    posMob: {
      type: String,
      default: null
    },
    posPad: {
      type: String,
      default: null
    },
    posPc: {
      type: String,
      default: null
    },
    textColor: {
      type: String,
      default: '#000000'
    },
    writingMode: {
      type: String,
      default: 'horizontal'
    }
  },
  setup(props) {
    const { deviceType, seletcSRCByDevice } = useRWDMethods()
    const device = deviceType.value
    const { sendGA, formatGA } = useGA()

    const titleTop = computed(() => {
      if (!props.posMob && props.posPad && !props.posPc) return 0
      if (device === 'mob') return props.posMob.split(',')[1].concat('vh')
      if (device === 'pad') return props.posPad.split(',')[1].concat('vh')
      if (device === 'pc') return props.posPc.split(',')[1].concat('vh')
      return 0
    })
    const titleLeft = computed(() => {
      if (!props.posMob && !props.posPad && !props.posPc) return 0
      if (device === 'mob') return props.posMob.split(',')[0].concat('vw')
      if (device === 'pad') return props.posPad.split(',')[0].concat('vw')
      if (device === 'pc') return props.posPc.split(',')[0].concat('vw')
      return 0
    })
    const titleTranslate = computed(() => `translate(${titleLeft.value},${titleTop.value})`)
    const titleWritingMode = computed(() => {
      if (props.writingMode === 'vrl') return 'vertical-rl'
      if (props.writingMode === 'vlr') return 'vertical-lr'
      return 'horizontal-tb'
    })

    const handleScroll = () => {
      vueScrollTo.scrollTo('#enter-anchor')
      sendGA(formatGA('CoverArrow'))
    }

    return {
      deviceType,
      titleTop,
      titleLeft,
      titleTranslate,
      titleWritingMode,
      handleScroll,
      seletcSRCByDevice
    }
  }
}
</script>

<style lang="scss" scoped>
.page-cover {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  margin-bottom: 48px;
  @include pad {
    margin-bottom: 0;
  }
  @include pc {
    margin-bottom: 0;
  }
  .page-cover__title {
    position: relative;
    display: inline-block;
    p,
    h1,
    h2,
    h3,
    h4,
    h5 {
      color: inherit;
    }
  }
  .page-cover__arrow {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  .page-cover__enter-anchor {
    position: absolute;
    bottom: 0;
  }
}
</style>
