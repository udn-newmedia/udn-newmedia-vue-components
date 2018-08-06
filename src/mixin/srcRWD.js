var mixin = {
  methods: {
    srcRWD: function (mob, pc) {
      if (window.innerWidth <= 768) {
        if (window.matchMedia('(orientation: landscape)').matches) {
          return pc
        } else {
          return mob
        }
      } else {
        return pc
      }
    }
  }
}

export default mixin
