import { getPlanets, getCharacters } from '@/services/api'
import * as types from '@/storeActionTypes/store'

export const state = () => ({
  planets: [],
  characters: []
})

export const mutations = {
  [types.GET_PLANETS](state, data) {
    state.planets = data
  },
  [types.GET_CHARACTERS](state, data) {
    state.characters = data
  }
}

export const actions = {
  async getAllPlanets({ commit }) {
    const res = await getPlanets(this.$axios)
    if (res) {
      commit('GET_PLANETS', res.results)
      return res
    }
  },

  async getAllCharacters({ commit }) {
    const res = await getCharacters(this.$axios)
    if (res) {
      commit('GET_CHARACTERS', res.results)
      return res
    }
  }
}
