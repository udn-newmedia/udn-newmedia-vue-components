export const setAnchorMenu = (state, data) => {
  state.anchorMenu.push(data)
}
export const updateAnchorMenuItem = (state, data) => {
  let tIndex = state.anchorMenu.findIndex((element) => {
    return element.id === data.id
  })
  state.anchorMenu[tIndex] = data
}
export const resetAnchorActive = (state) => {
  for (let i = 0; i < state.anchorMenu.length; i++) {
    state.anchorMenu[i].isActive = false
  }
}
export const setAnchorActive = (state, index) => {
  state.anchorMenu[index].isActive = true
}
