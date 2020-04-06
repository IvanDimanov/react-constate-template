import React, {useCallback, useMemo} from 'react'

import {PersonCard, Error} from 'components'
import {PersonForm} from 'forms'

import {
  REQUEST_STATUS_LOADING,
  REQUEST_STATUS_ERROR,
} from 'contexts/constants'
import {usePersonsContext} from 'contexts/persons'

import styles from './index.module.scss'


const PersonFormPage = () => {
  const {
    person: personResponse,
    personRequest: {status, errorMessage} = {},
    fetchPersonById,
  } = usePersonsContext()

  const person = useMemo(() => {
    return status === REQUEST_STATUS_ERROR ? {} : personResponse
  }, [personResponse, status])

  const isLoading = useMemo(() => {
    return status === REQUEST_STATUS_LOADING
  }, [status])

  const onSubmit = useCallback(({id}) => fetchPersonById(id), [fetchPersonById])


  return (
    <>
      <h1>Person</h1>

      <PersonCard
        person={person}
        isLoading={isLoading}
      />

      <br />
      {errorMessage && <Error className={styles.Error}>{errorMessage}</Error>}

      <PersonForm
        className={styles.Form}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </>
  )
}


export default PersonFormPage
