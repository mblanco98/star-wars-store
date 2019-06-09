export const getPlanets = async $axios => {
  const res = await $axios.$get('/planets')
  return res
}

export const getPeople = async $axios => {
  const res = await $axios.$get('/people')
  return res
}

export const getStarships = async $axios => {
  const res = await $axios.get('/starships')
  return res
}

export const getVehicules = async $axios => {
  const res = await $axios.get('/vehicles')
  return res
}
