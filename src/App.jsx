import React from "react";
import './App.scss'
import { TodoProvider } from "./TodoContext/TodoContext";
import AppUI from "./components/AppUI/AppUI";

// const defaultTodos = [
//   {
//     text: 'Cortar cebolla', completed: true
//   },
//   {
//     text: 'Tomar curso', completed: false
//   },
//   {
//     text: 'Llorar', completed: false
//   },
// ]

function App() {

  return (
    <>
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
    </>
  );
}

export default App;
