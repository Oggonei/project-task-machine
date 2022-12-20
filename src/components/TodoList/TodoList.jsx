import React from 'react'
import './TodoList.scss'

const TodoList = (props) => {
  return (
    <>
      <section className='todoList-container'>
        <ul className='todoList-container-ul'>
          {props.children}
        </ul>
      </section>
    </>
  )
}

export default TodoList