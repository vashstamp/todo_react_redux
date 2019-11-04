import React from 'react'
import {connect} from 'react-redux'
import cn from 'classnames'

import {checkTodo, deleteTodo} from '../redux/todos'
import './List.css'

function List({todos, checkTodo, deleteTodo}) {
  return (
    <ul className="List collection z-depth-5">
      {todos.length ? (
        todos.map(item => (
          <li key={item.id} className={cn('List-Item collection-item', {'List-Item_done': item.isDone})}>
            <p className="List-ItemText">{item.text}</p>
            <div className="List-ItemActions">
              <button
                type="button"
                className="btn-flat btn-small waves-effect"
                onClick={item.isDone ? () => deleteTodo(item.id) : () => checkTodo(item.id)}
              >
                <i className="material-icons">{item.isDone ? 'delete' : 'check'}</i>
              </button>
            </div>
          </li>
        ))
      ) : (
        <li className="collection-item center-align grey-text">No tasks</li>
      )}
    </ul>
  )
}

const mapStateToProps = todos => ({
  todos: todos.sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone && !b.isDone ? 1 : -1)),
})

const mapDispatchToProps = {
  checkTodo,
  deleteTodo,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
