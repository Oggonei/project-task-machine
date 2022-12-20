import React from 'react'
import { FaClipboardList } from "react-icons/fa";
import { TodoContext } from '../../TodoContext/TodoContext';
import Modal from '../Modal/Modal';
import TodoButton from '../TodoButton/TodoButton';
import TodoCounter from '../TodoCounter/TodoCounter';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';
import TodoList from '../TodoList/TodoList';
import TodoSearch from '../TodoSearch/TodoSearch';
import './AppUI.scss';
import { MdOutlineLibraryAdd } from "react-icons/md";

const AppUI = () => {

  const {            
    searchedTodos,
    completeTodo,
    deleteTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal

  } = React.useContext(TodoContext)

  return (   
    <>
        <div className="todo-title-container">
        <FaClipboardList className="todo-title-container_icon"/>
        <h2 className="todo-title-container_title">Task Machine</h2>
        </div>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoCounter
        total={totalTodos}
        completed={completedTodos}
        />
        <TodoList>
          {!totalTodos && <div className='addNewTask-container'><p>Add new Tasks</p><MdOutlineLibraryAdd className='addNewTask-container-icon'/></div>}
          {searchedTodos.map( todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete = {() => completeTodo(todo.text)}
              onDelete = {() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {openModal &&         
          <Modal>
            <TodoForm/>
          </Modal> 
        }


        <TodoButton setOpenModal={setOpenModal}/>
      </>
  )
}

export default AppUI



