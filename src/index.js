import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import combinedReducer from './reducers'

const store = createStore(combinedReducer)

render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,

  document.getElementById('root')
)
