import request from 'utils/request'
import getResponseError from 'utils/getResponseError'

const persons = {
  async fetchPersonById(id) {
    try {
      const {data} = await request.get(`https://swapi.dev/api/people/${id}`)
      return data
    } catch (error) {
      throw getResponseError(error)
    }
  },

  async fetchSpeciesById(id) {
    try {
      const {data} = await request.get(`https://swapi.dev/api/species/${id}`)
      return data
    } catch (error) {
      throw getResponseError(error)
    }
  },
}

export default persons
