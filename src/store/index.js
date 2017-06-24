import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 0,
    config: {},
    project: [],
    firebase: 0
  },

  mutations: {
    init (state, data) {
      state.status = 1
      state.config = data.config
      state.firebase = data.firebase
      state.project = data.project
    },
    addToProject (state, data) {
      state.project = state.project.concat(data)
    }
  },

  getters: {
    userConfig (state) {
      return state.config
    },
    firebase (state) {
      return state.firebase
    }
  }
})
