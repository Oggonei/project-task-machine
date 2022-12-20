import React from 'react'
import { TodoContext } from '../../TodoContext/TodoContext'
import './TodoForm.scss'

const TodoForm = () => {

  const [newTodoValue, setNewTodoValue] = React.useState('')

  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)

  const onSubmit = (event) => {
    event.preventDefault()
    newTodoValue && addTodo(newTodoValue) 
    setOpenModal(false)
  }
 
  const onCancel = () => {
    setOpenModal(false)
  }
 
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <div className='todoForm-container'>
      <form onSubmit={onSubmit} className='todoForm-container-form'>
        <div className='todoForm-container-title'>
          <label>Add new task</label>
          <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder='Add new task'
            cols="30"
            rows="5"
          />
        </div>
        <div className="todoForm-container-buttons">
          <button type='submit' className="todoForm-container-buttons_add">Add</button>
          <button onClick={onCancel} type='button' className="todoForm-container-buttons_cancel">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm