const ADD_TODO = 'ADD_TODO'
const CHECK_TODO = 'CHECK_TODO'
const DELETE_TODO = 'DELETE_TODO'

const initialState = localStorage.todos ? JSON.parse(localStorage.todos) : []

const setLocalStorage = (todos: any) => {
  localStorage.todos = JSON.stringify(todos)
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO: {
      const newState = [...state, action.todo]
      setLocalStorage(newState)
      return newState
    }
    case CHECK_TODO: {
      const newState = [...state]
      newState.find(item => item.id === action.id).isDone = true
      setLocalStorage(newState)
      return newState
    }
    case DELETE_TODO: {
      const newState = state.filter((item: any) => item.id !== action.id)
      setLocalStorage(newState)
      return newState
    }
    default:
      return state
  }
}

export const addTodo = (value: any) => ({
  type: ADD_TODO,
  todo: {
    id: Date.now(),
    text: value,
  },
})

export const checkTodo = (id: any) => ({
  type: CHECK_TODO,
  id,
})

export const deleteTodo = (id: any) => ({
  type: DELETE_TODO,
  id,
})
