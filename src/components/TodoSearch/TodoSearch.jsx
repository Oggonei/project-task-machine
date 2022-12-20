import React from 'react'
import { TodoContext } from '../../TodoContext/TodoContext'
import './TodoSearch.scss'

const TodoSearch = () => {

  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className='todoSearch-container'>
        <input 
          type="text" 
          placeholder="Search task" 
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </div>
    </>
  )
}

export default TodoSearch