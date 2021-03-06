import { createStore } from 'vuex'

export default createStore({
  state: { isMember: false, modalIsOpen: false, anchorList: [] },
  mutations: {
    ADD_ANCHOR(state, payload) {
      const copy = JSON.parse(JSON.stringify(state.anchorList))
      copy.push(payload)
      state.anchorList = copy
    },
    CHECK_IDENTITY(state, payload) {
      state.isMember = payload.state
    },
    TRIGGER_MODAL(state) {
      state.modalIsOpen = !state.modalIsOpen
    }
  },
  actions: {
    // addAnchor(context) {
    //   context.commit('ADD_ANCHOR', context)
    // },
    async checkIdentity(context) {
      const getCookie = name => {
        const cookieArr = document.cookie.split(';')
        // Loop through the array elements
        for (let i = 0; i < cookieArr.length; i += 1) {
          const cookiePair = cookieArr[i].split('=')
          // Removing whitespace at the beginning of the cookie name
          // and compare it with the given string
          if (name === cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1])
          }
        }
        // Return null if not found
        return null
      }

      const account = getCookie('udnland')
      const udngold = getCookie('udngold')
      const cors = 'https://cors-anywhere.herokuapp.com/'
      const url = 'https://vip.udn.com/api/paywall_article'
      const body = {
        method: 'POST',
        headers: {
          // Accept: "application/json",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          account,
          udngold: encodeURIComponent(udngold),
          checkIdentity: true
        })
      }

      const res = await fetch(`${cors}${url}`, body)
      const result = await res.json()
      // fix the result
      result.state = true

      context.commit('CHECK_IDENTITY', result)
    },
    triggerModal(context) {
      const bodyEl = document.querySelector('body')
      if (bodyEl.style.overflow !== 'hidden') {
        bodyEl.style.overflow = 'hidden'
      } else {
        bodyEl.style.overflow = null
      }

      context.commit('TRIGGER_MODAL')
    }
  },
  modules: {}
})
