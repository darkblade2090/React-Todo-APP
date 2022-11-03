
//import Input from './input.js'
import Input from './Components/input';
import Display from './Components/Display';
import React,{useState} from 'react'



function App() {
  const [todos,setTodos]= useState([]);

  function TodoUpdate(newVal){
    const newTask = [...todos , newVal]
    setTodos(newTask)
  }

  const removeTask = (index) =>{
    const newTask = [...todos]
    newTask.splice(index,1)
    setTodos(newTask)
  }

  return(
    <>
    <Input AddTodo={TodoUpdate}/>
    <Display todos={todos} removeTask={removeTask}/>
    </>
  )
}

export default App;
