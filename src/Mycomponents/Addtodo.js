import React,{useState} from 'react';

const Addtodo = ({addtodo}) => {
  const [title,settitle] = useState("");
  const [desc,setdesc] = useState("");
  const submit = (e) =>{
   e.preventDefault();//it will not reload  screen when we will submit
   if(!title || !desc)
   {
       alert("Title and description can not be blank");
   }
    addtodo(title,desc);
  }
  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label for="title" className="form-label">Todo Title</label>
    <input type="text" value = {title} class="form-control" onChange={(e)=>settitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="desc" className="form-label">Todo description</label>
    <input type="text" value = {desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default Addtodo
