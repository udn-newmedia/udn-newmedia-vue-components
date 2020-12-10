import { ref, computed } from 'vue'
import debounce from 'lodash.debounce'

function detectDevice(w) {
  switch (true) {
    case w < 767.98:
      return 'mob'
    case w >= 768 && w <= 1024.98:
      if (window.matchMedia('(orientation: landscape)').matches) return 'pc'
      return 'pad'
    default:
      return 'pc'
  }
}

const rwdMethods = () => {
  const windowWidth = ref(window.innerWidth)

  const isMob = computed(() => windowWidth.value <= 1024)
  const deviceType = computed(() => detectDevice(windowWidth.value))

  const handleResize = () => {
    debounce(() => {
      windowWidth.value = window.innerWidth
    })
  }

  const seletcSRCByDevice = (mob, pad, pc) => {
    switch (deviceType.value) {
      case 'mob':
        return mob
      case 'pad':
        return pad
      default:
        return pc
    }
  }

  return {
    windowWidth,
    isMob,
    deviceType,
    handleResize,
    seletcSRCByDevice
  }
}

export default rwdMethods
