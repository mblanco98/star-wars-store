import {
  getPlanets,
  getPeople,
  getVehicules,
  getStarships
} from '@/services/api'
import * as types from '@/storeActionTypes/shop'

export const state = () => ({
  people: [],
  planets: [],
  vehicles: [],
  spaceships: [],
  tabOnView: 'People'
})

export const mutations = {
  [types.GET_PLANETS](state, planets) {
    state.planets = planets
  },
  [types.GET_PEOPLE](state, people) {
    state.people = people
  },
  [types.GET_STARSHIPS](state, starships) {
    state.spaceships = starships
  },
  [types.GET_VEHICULES](state, vehicles) {
    state.vehicles = vehicles
  },
  [types.TAB_VIEW](state, tab) {
    state.tabOnView = tab
  }
}

export const actions = {
  tabOnViewChanged({ commit, dispatch }, tab) {
    commit(`${types.TAB_VIEW}`, tab)
    dispatch(`getAll${tab}`)
  },
  async getAllPlanets({ commit }) {
    const res = await getPlanets(this.$axios)
    if (res) {
      commit('GET_PLANETS', res.results)
      return res
    }
  },

  async getAllStarships({ commit }) {
    const res = await getStarships(this.$axios)
    if (res) {
      commit('GET_STARSHIPS', res.results)
      return res
    }
  },

  async getAllVehicules({ commit }) {
    const res = await getVehicules(this.$axios)
    if (res) {
      commit('GET_VEHICULES', res.results)
      return res
    }
  },

  async getAllPeople({ commit }) {
    const res = await getPeople(this.$axios)
    if (res) {
      commit('GET_PEOPLE', res.results)
      return res
    }
  }
}
