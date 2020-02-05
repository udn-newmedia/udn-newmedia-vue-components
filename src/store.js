import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: window.innerWidth,
    anchorList: [],
  },
  getters: {
    isMob(state) {
      return state.windowWidth <= 1024 ? true : false;
    },
    deviceType(state) {
      const w = state.windowWidth;
      
      switch (true) {
        case (w < 768):
          return 'mob';          
          break;
        case (768 <= w && w <= 1024):
          return 'pad';
          break;
        default:
          return 'pc';
          break;
      }
    }
  },
  mutations: {
    updateWindowWidth (state, width) {
      state.windowWidth = width;
    },
    addAnchor (state, anchor) {
      /**
       * anchor = {
       *  title: ...
       *  active: true / false
       *  position: ...
       * }
       */
      state.anchorList.push(anchor)
    },
    updateAnchorStatus (state, object) {
      state.anchorList[object.index].active = object.status;
    }
  },
  actions: {
    updateWindowWidth (context, width) {
      context.commit('updateWindowWidth', width);
    },
    addAnchor (context, anchor) {
      context.commit('addAnchor', anchor);
    },
    updateAnchorStatus (context, object) {
      context.commit('updateAnchorStatus', object);
    }
  }
})