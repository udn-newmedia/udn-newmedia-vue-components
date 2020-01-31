/**
* Select src from props according to "isMob" / "deviceType"
*/


const _selectSrcMethods = {
  computed: {
    selectSrc_2: function() {
      return this.isMob ? this.src : this.srcPc
    },
    selectSrc_3: function() {
      const deviceType = this.deviceType;
      
      switch (deviceType) {
        case 'mob':
          return this.src;
          break;

        case 'pad':
          return this.srcPad;    
          break;
      
        default:
          return this.srcPc;
          break;
      }
    },
  },
}

export default _selectSrcMethods