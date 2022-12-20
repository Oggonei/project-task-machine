import React from 'react'
import { TodoContext } from '../../TodoContext/TodoContext'
import './TodoButton.scss'



const TodoButton = () => {

  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  const modal = () => {
    openModal ? setOpenModal(false) : setOpenModal(true)
  }

  return (
    <>
      <div className="todoButton-container">
        <button 
          className="todoButton-container_button"
          onClick={() => modal()}
        >
          +
        </button>
      </div>
    </>
  )
}

export default TodoButton