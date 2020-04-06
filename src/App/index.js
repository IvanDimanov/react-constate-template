import React from 'react'
import {ThemeProvider, CssBaseline} from '@material-ui/core'
import theme from 'assets/themes'

import 'assets/styles/main.module.scss'

import {PersonsProvider} from 'contexts/persons'

import AppRouter from './AppRouter'


const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <PersonsProvider>
          <AppRouter />
        </PersonsProvider>
      </ThemeProvider>
    </CssBaseline>
  )
}

export default App
