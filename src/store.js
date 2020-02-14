import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    anchorList: [],
  },
  getters: {},
  mutations: {
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
    addAnchor (context, anchor) {
      context.commit('addAnchor', anchor);
    },
    updateAnchorStatus (context, object) {
      context.commit('updateAnchorStatus', object);
    }
  }
})