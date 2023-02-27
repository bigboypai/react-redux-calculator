import React from 'react'
import ReactDOM from 'react-dom/client'
import Grid from './components/Grid'
import './style/Main.css'
// Redux imports
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='wrapper'>
    <Provider store={store}>
      <Grid />
    </Provider>
    </div>
  </React.StrictMode>,
)
