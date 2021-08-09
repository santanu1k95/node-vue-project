import { createStore } from 'vuex'

export default createStore({
  state: {
    menuOpen: false,
  },
  mutations: {
    togMenuOpen(state,menuOpen){
      console.log(state)
      this.state.menuOpen = !state.menuOpen;
    },
  },
  actions: {
    togMenuOpen(state,menuOpen){
      state.commit('togMenuOpen',)
    }
  },
  modules: {
  },
  getters:{
    getMenuOpen(state){
      return state.menuOpen
    }
  }
})
