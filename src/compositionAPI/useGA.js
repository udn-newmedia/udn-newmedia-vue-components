import gaTable from '@/utils/gaFormator'
import { detectPlatform } from '@/utils/udn-newmedia-utils'

const useGA = () => {
  const sendGA = item => {
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
      eventLabel: `[${detectPlatform()}] [${document.querySelector('title').innerHTML}] [${
        item.label
      }]`
    })
  }

  const sendUDNGA = item => {
    window.ga('udn.send', {
      hitType: 'event',
      eventCategory: item.category,
      eventAction: item.action,
      eventLabel: `[${detectPlatform()}] [${document.querySelector('title').innerHTML}] [${
        item.label
      }]`
    })
  }

  const formatGA = name => gaTable[name]

  return {
    sendGA,
    sendUDNGA,
    formatGA
  }
}

export default useGA
