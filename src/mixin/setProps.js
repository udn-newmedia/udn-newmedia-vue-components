var mixin = {
  methods: {
    // p = 傳入的props
    // 優先使用jsonProps的資料
    // 有jsonProps 不能有其他props
    setProps (p) {
      if (this.jsonProps !== null) {
        if (this.jsonProps[p] !== undefined) {
          return this.jsonProps[p]
        } else { 
          return this[p]
        }
      } else {
        return this[p]
      }
    }
  }
}

export default mixin
