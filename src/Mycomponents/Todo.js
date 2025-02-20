import React from 'react'
export const Todo = ({tod,ondelete}) => {
  return (
    <div>
        <h4>{tod.title}</h4> 
        <p>{tod.desc}</p>
       <button className="btn btn-sm btn-danger" onClick={() =>{ondelete(tod)}}>Delete</button>

    </div>
  )
}


