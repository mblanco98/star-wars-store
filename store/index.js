import * as types from '../storeActionTypes'

export const state = () => ({
  auth: false,
  dark: true
})

export const mutations = {
  [types.USER_LOGIN](state) {
    return state
  },
  [types.SWITCH_DARK](state, bool) {
    return (state.dark = bool)
  }
}

export const actions = {
  login({ commit }) {
    commit('USER_LOGIN')
  },
  switchDark({ commit, state }) {
    commit('SWITCH_DARK', !state.dark)
  }
}
