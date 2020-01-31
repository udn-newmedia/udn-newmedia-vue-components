import { detectPlatform } from '@/utils/udn-newmedia-utils';
import table from '@/utils/gaFormator';

const _sendGaMethods = {
  methods: {
    sendGA: function(item) {
      /**
      * item = {
      *   category: ... 
      *   action: ... 
      *   label: ... 
      * }
      */
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": item.category,
        "eventAction": item.action,
        "eventLabel": "[" + detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + item.label +"]"
      });
    },
    formatGA: function(name) {
      return table[name];
    },
  },
}

export default _sendGaMethods