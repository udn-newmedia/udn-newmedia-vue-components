const _selectSrcMethods = {
  computed: {
    selectSrc_2: function() {
      if (this.isMob) return this.src;
      else return this.pc;
    },
    selectSrc_3: function() {
      const deviceType = this.deviceType;
      switch (deviceType) {
        case 'mod':
          return this.src;
          break;

        case 'pad':
          return this.srcPad;    
          break;
      
        default:
          return this.pc;
          break;
      }
    },
  },
}

export default _selectSrcMethods