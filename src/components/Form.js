import React, {Component} from 'react'
import {connect} from 'react-redux'
import cn from 'classnames'

import {addTodo} from '../redux/todos'
import './Form.css'

interface FormProps {
  addTodo: any
}

interface FormState {
  value: string
}

const initialState = {
  value: '',
}

class Form extends Component<FormProps, FormState> {
  inputRef: React.RefObject<HTMLInputElement>
  constructor(props: FormProps) {
    super(props)
    this.state = initialState
    this.inputRef = React.createRef()
  }

  handleSubmit = (e: any): void => {
    e.preventDefault()
    if (this.isSubmitActive()) {
      this.props.addTodo(this.state.value.trim())
      this.setState(initialState)
    } else {
      this.inputRef.current.focus()
    }
  }

  isSubmitActive = () => Boolean(this.state.value.trim())

  handleValueChange = (e: any) => this.setState({value: e.target.value})

  render() {
    const {value} = this.state
    return (
        <form noValidate className="Form" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              id="icon_prefix"
              className="white-text"
              name="value"
              type="text"
              value={value}
              ref={this.inputRef}
              onChange={this.handleValueChange}
            />
            <label htmlFor="icon_prefix">New task</label>
          </div>
          <button className={cn('btn-floating waves-effect waves-light', {pulse: this.isSubmitActive()})}>
            <i className="material-icons">add</i>
          </button>
        </form>
    )
  }
}

const mapDispatchToProps = {
  addTodo
}

export default connect(
  null,
  mapDispatchToProps,
)(Form)

