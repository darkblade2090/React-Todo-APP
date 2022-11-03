import React from 'react'

function Display(props) {



  return (
    <div>
      <ul>
        {props.todos.map((todo,index) =>  (<li key={index} index={index}>
            {todo} 
            <button onClick={() => props.removeTask(index)}>Delete</button></li>))}
      </ul>
    </div>
  )
}

export default Display
