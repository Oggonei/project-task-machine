import React ,{ createContext, useState } from "react";
import useLocalStorage from "./UseLocalStorage";


const TodoContext = createContext()

function TodoProvider(props) {

  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [openModal, setOpenModal] = useState(false)

  const [ searchValue, setSearchValue ] = useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
   searchedTodos = todos 
  }
  else {
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text )
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text: text,
      completed: false
    })
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text )
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1)
    //newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }