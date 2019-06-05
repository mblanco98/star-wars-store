export const getPlanets = async $axios => {
  const res = await $axios.$get('/planets')
  return res
}

export const getCharacters = async $axios => {
  const res = await $axios.$get('/people')
  return res
}
