import React from 'react'
import { TodoContext } from '../../TodoContext/TodoContext'
import './TodoCounter.scss'

const TodoCounter = () => {

  const { totalTodos, completedTodos } = React.useContext(TodoContext)

  return (
    <>
      <div className='todoCounter-container'>
        {totalTodos === 0 ? <p className='todoCounter-container_text'>you have no pending tasks</p> : <p className='todoCounter-container_text'>Has completado {completedTodos} de {totalTodos} tareas</p>}
        <span className='todoCounter-container_separator'></span>
      </div>
    </>
  )
}

export default TodoCounter