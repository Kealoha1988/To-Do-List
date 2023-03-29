import React from 'react'

export default function Todo({ todo, toggleTodo }) {

    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }


  return (
    <div>
        <lable style={todo.complete === false ? {color:'black'} : {color:'green'}}>
            <input type="checkbox" checked={todo.complete} onChange= {handleTodoClick} ></input>
            {todo.name}
        </lable>  
        <br />
        <br />
    </div>
  )
}
