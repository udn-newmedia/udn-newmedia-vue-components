/**
 * Mixins in App.vue to resolve fb-inapp browser resizing
 */

import InApp from 'detect-inapp';

const fbBrowserResize = {
  methods: {
    handleFbBrowserResize() {
      // 處理inapp browser window.innerWidth問題
      (function() {
        const inapp = new InApp(navigator.userAgent || navigator.vendor || window.opera);
        let currentWidth = window.innerWidth;
        let executeCount = 0;
        if (inapp.isInApp) {
          const inappWidthListener = setInterval(() => {
            executeCount++;
            if (window.innerWidth !== currentWidth) {
              window.location.reload();
              currentWidth = window.innerWidth;
            }
            if (executeCount > 10) {
              clearInterval(inappWidthListener);
            }
          }, 100);
        }
      })();
    }
  },
  created() {
    this.handleFbBrowserResize();
  },
}

export { fbBrowserResize };