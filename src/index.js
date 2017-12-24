import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Routes from './Routes.jsx'

const root = document.getElementById('root')
root && ReactDOM.render(<AppContainer><Routes/></AppContainer>, root)