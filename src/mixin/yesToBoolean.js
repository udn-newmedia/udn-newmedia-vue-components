var mixin = {
  methods: {
    yesToBoolean (target) {
      switch (target) {
        case 'yes':
          return true
        case 'no':
          return false
        case true:
          return true
        case false:
          return false
        default:
          return false
      }
    }
  }
}

export default mixin
