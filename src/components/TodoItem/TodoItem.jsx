import React from 'react'
import './TodoItem.scss'
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const TodoItem = ({
  text,
  completed,
  onComplete,
  onDelete
}) => {

return (
  <>
    <li className='todoItem-li'>
      <span onClick={onComplete} className='todoItem-li_check'>{!completed ? <BiCheckbox/> : <BiCheckboxChecked/>}</span>
      <p className={`todoItem-li_text ${completed && 'checked'}`}>{text}</p>
      <span onClick={onDelete} className='todoItem-li_delete'><MdDelete/></span>
    </li>
  </>
)
}

export default TodoItem