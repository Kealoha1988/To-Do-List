import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import Header from "./Header"
import { v4 as uuid } from 'uuid';




function App() {

  const LOCAL_STORAGE_KEY = 'todoApp.todos'

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  const handleAddTodo = (e) => {
   const name = todoNameRef.current.value
   if (name === 'name') return
   setTodos(prevTodos => [...prevTodos, {id: uuid(), name: name, complete: false}])
   todoNameRef.current.value = null
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const handleTodoClear = (e) => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

   

  
  return (
    <>
    <Header />
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <center>
    <input ref= {todoNameRef} type="text" />

    </center>
    <br />
    <center>
    <button onClick= {handleAddTodo} style={{color:'green'}}>Add Todo</button>
    <button onClick= {handleTodoClear} style={{color: 'red'}}>Clear Completed</button> 
    </center>
    <br />
    <center>
    <div style={{color:'red'}}>{todos.filter(todo => !todo.complete).length} left to do</div>
    </center>
    </>
  );
}

export default App;
