import React from 'react'
import {Todo} from './Todo'
const Todos = (props) => {
 let  mystyle = {
         minHeight:"70vh",
         margin: "10px auto",
    

  }
  return (
      <div className="container" style={mystyle}>
       <h3 className="text-center my-3">Todos list</h3>
       {props.arr.length===0 ? "No todos to display":
      props.arr.map((todo)=>{
        return <Todo tod = {todo}  ondelete={props.ondelete}/>
       })
      
    }
      
      </div>
  )
}

export default Todos
