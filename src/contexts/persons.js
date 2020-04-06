import {useState} from 'react'
import constate from 'constate'

import personsApi from 'api/persons'

import {
  REQUEST_STATUS_INITIAL,
  REQUEST_STATUS_LOADING,
  REQUEST_STATUS_LOADED,
  REQUEST_STATUS_ERROR
} from './constants'

const initialState = {
  person: {},
  personRequest: {
    status: REQUEST_STATUS_INITIAL,
    errorMessage: '',
  },
}

/**
 * Fetches the specific Person by ID from the API
 * @param {function} setPerson React useState setter for prop `person`
 * @param {function} setPersonRequest React useState setter for prop `personRequest`
 * @return {undefined}
 */
const fetchPersonById = (setPerson, setPersonRequest) => async id => {
  setPersonRequest({
    status: REQUEST_STATUS_LOADING,
    errorMessage: '',
  })

  try {
    const person = await personsApi.fetchPersonById(id)

    /* Fetch all the species that are related to the Person */
    const speciesIds = person.species
      .map(url => url.match(/(\d+)\/$/))
      .filter(Boolean)
      .map(matches => matches[1])
    const fetchedSpecies = await Promise.all(speciesIds.map(personsApi.fetchSpeciesById))

    person.fetchedSpecies = fetchedSpecies

    setPerson(person)
    setPersonRequest({
      status: REQUEST_STATUS_LOADED,
      errorMessage: '',
    })
  } catch (error) {
    setPersonRequest({
      status: REQUEST_STATUS_ERROR,
      errorMessage: error.errorMessage || error.message,
    })
  }
}


/**
 * Main component that hosts all Persons data
 * @return {object} Which props will be available as "constate" context
 */
function usePersons() {
  const [person, setPerson] = useState(initialState.person)
  const [personRequest, setPersonRequest] = useState(initialState.personRequest)

  return {
    person,
    personRequest,
    fetchPersonById: fetchPersonById(setPerson, setPersonRequest),
  }
}


const [PersonsProvider, usePersonsContext] = constate(usePersons)
export {PersonsProvider, usePersonsContext}
