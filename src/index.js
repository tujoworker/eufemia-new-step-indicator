// Support IE
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
// import 'core-js/es6/array'

import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'
import '@dnb/eufemia/es/style'

render(<App />, document.getElementById('root'))
