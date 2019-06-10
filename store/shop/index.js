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
  starships: [],
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
    state.starships = starships
  },
  [types.GET_VEHICLES](state, vehicles) {
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
      commit(`${types.GET_PLANETS}`, res.results)
      return res
    }
  },

  async getAllStarships({ commit }) {
    const res = await getStarships(this.$axios)
    if (res) {
      commit(`${types.GET_STARSHIPS}`, res.results)
      return res
    }
  },

  async getAllVehicles({ commit }) {
    const res = await getVehicules(this.$axios)
    if (res) {
      // eslint-disable-next-line
      commit(`${types.GET_VEHICLES}`, res.results)
      return res
    }
  },

  async getAllPeople({ commit }) {
    const res = await getPeople(this.$axios)
    if (res) {
      commit(`${types.GET_PEOPLE}`, res.results)
      return res
    }
  }
}
