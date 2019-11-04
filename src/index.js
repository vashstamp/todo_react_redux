import React from 'react'
import ReactDOM from 'react-dom'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize'

import './styles/base.css'
import App from './components/App'
import * as serviceWorker from './utils/serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
