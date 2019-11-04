import * as React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import todos from '../redux/todos'
import Form from './Form'
import List from './List'
import './App.css'

let store = createStore(todos)

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main className="App-Main">
          <h1 className="App-Title">Todo list</h1>
          <Form />
          <List />
        </main>
      </div>
    </Provider>
  )
}
