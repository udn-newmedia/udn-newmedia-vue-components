// 從 <Anchor> 傳物件近來vuex
// anchorItem = {
//   "id": this.setId,
//   "title": this.setProps('title'),
//   "isActive": true
// }
export const addAnchor = function ({ commit }, anchorItem) {
  commit('setAnchorMenu', anchorItem)
}
export const updateAnchor = function ({ commit }, anchorItem) {
  commit('updateAnchorMenuItem', anchorItem)
}
export const resetAnchorActive = ({ commit }) => {
  commit('resetAnchorActive')
}
export const setAnchorActive = ({ commit }, index) => {
  commit('setAnchorActive', index)
}
