import { createStore } from 'vuex'

const defaultState = {
  count: 0
}
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(content) {
      content.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return state.count * 2
    }
  }
})
