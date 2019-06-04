import * as types from '../storeActionTypes'

export const state = () => ({
  auth: false
})

export const mutations = {
  [types.USER_LOGIN](state) {
    return state
  }
}

export const actions = {
  login({ commit }) {
    commit('USER_LOGIN')
  }
}
