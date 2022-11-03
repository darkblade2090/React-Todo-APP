import React,{useState} from 'react'


function Input(props) {
    const [val,setValue]=useState("");

    const HandleClick = () => {
        if(val!=="")
            props.AddTodo(val)
        setValue("");
    }

  return (<>
      <input type="text" value={val} onChange={e => {setValue(e.target.value)}} placeholder="Enter todo" />
      <button type="submit" onClick={HandleClick}>Add Todo</button>
      </>
  )
}

export default Input
