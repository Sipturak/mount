import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import css_cards from './CSS/css_cards.css'
import aboutUs from './CSS/aboutUs.css'

import {BrowserRouter} from 'react-router-dom'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import { green } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#fff'
    },
    secondary:{
      main: green[300]
    }
  }
})

const app = (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)

ReactDOM.render(
  app,document.getElementById('root')
)

reportWebVitals();
