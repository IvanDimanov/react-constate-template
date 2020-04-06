import React, {useCallback, useMemo} from 'react'

import Grid from '@material-ui/core/Grid'
import {PersonCard, Button, Error} from 'components'

import {
  REQUEST_STATUS_LOADING,
  REQUEST_STATUS_ERROR,
} from 'contexts/constants'
import {usePersonsContext} from 'contexts/persons'

import styles from './index.module.scss'


const Person = () => {
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

  const onButtonClick = useCallback(id => () => fetchPersonById(id), [fetchPersonById])


  return (
    <>
      <h1>Person</h1>

      <PersonCard
        person={person}
        isLoading={isLoading}
      />

      <br />

      <Grid
        container
        spacing={0}
        justify='space-between'
        className={styles.GridContainer}
      >
        <Grid item xs={12}>
          {errorMessage && <Error>{errorMessage}</Error>}
          <br />
        </Grid>

        <Button
          className={styles.Button}
          onClick={onButtonClick(1)}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Luke
        </Button>

        <Button
          className={styles.Button}
          onClick={onButtonClick(5)}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Lea
        </Button>


        <Button
          className={styles.Button}
          color='secondary'
          onClick={onButtonClick(100)}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Test Error
        </Button>

      </Grid>
    </>
  )
}


export default Person
