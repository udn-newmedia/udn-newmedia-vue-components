import _debounce from 'lodash.debounce';
import { detectPlatform } from '@/utils/udn-newmedia-utils';
import gaTable from '@/utils/gaFormator';

function detectDevice(w) {
  switch (true) {
    case w < 767.98:
      return 'mob';
    case w >= 768 && w <= 1024.98:
      if (window.matchMedia('(orientation: landscape)').matches) return 'pc';
      return 'pad';
    default:
      return 'pc';
  }
}

const rwdMethods = {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    isMob() {
      return this.windowWidth <= 1024;
    },
    deviceType() {
      const w = this.windowWidth;
      return detectDevice(w);
    },
  },
  methods: {
    handleResize: _debounce(function () {
      this.windowWidth = window.innerWidth;
    }, 100),
  },
  mounted() {
    window.addEventListener('resize', this.handleResize, true);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize, true);
  },
};

const autoResize_2 = {
  computed: {
    isMob() {
      return this.$root.isMob;
    },
  },
  watch: {
    isMob() {
      this.$forceUpdate();
    },
  },
};

const autoResize_3 = {
  computed: {
    deviceType() {
      return this.$root.deviceType;
    },
  },
  watch: {
    deviceType() {
      this.$forceUpdate();
    },
  },
};

const selectSrcMethod_2 = {
  methods: {
    selectSrc_2(mob, pc) {
      const isMob = window.innerWidthwidth <= 1024;
      return isMob ? mob : pc;
    },
  },
};

const selectSrcMethods = {
  methods: {
    selectSrc_3(mob, pad, pc) {
      const w = window.innerWidth;
      const deviceType = detectDevice(w);
      switch (deviceType) {
        case 'mob':
          return mob;
        case 'pad':
          return pad;
        default:
          return pc;
      }
    },
  },
};

const sendGaMethods = {
  methods: {
    sendGA(item) {
      /**
       * item = {
       *   category: ...
       *   action: ...
       *   label: ...
       * }
       */
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: item.category,
        eventAction: item.action,
        eventLabel:
          `[${
            detectPlatform()
          }] [${
            document.querySelector('title').innerHTML
          }] [${
            item.label
          }]`,
      });
    },
    sendUDNGA(item) {
      window.ga('udn.send', {
        hitType: 'event',
        eventCategory: item.category,
        eventAction: item.action,
        eventLabel:
          `[${
            detectPlatform()
          }] [${
            document.querySelector('title').innerHTML
          }] [${
            item.label
          }]`,
      });
    },
    formatGA(name) {
      return gaTable[name];
    },
  },
};

const _setProps = {
  methods: {
    // p = 傳入的props
    // 優先使用jsonProps的資料
    // 有jsonProps 不能有其他props
    setProps(p) {
      if (this.jsonProps !== null) {
        if (this.jsonProps[p] !== undefined) {
          return this.jsonProps[p];
        }
        return this[p];
      }
      return this[p];
    },
  },
};

export {
  rwdMethods,
  autoResize_2,
  autoResize_3,
  selectSrcMethod_2,
  selectSrcMethods,
  sendGaMethods,
  _setProps,
};
