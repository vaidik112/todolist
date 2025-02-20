// import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/header';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
import React,{useState} from 'react';
import Addtodo from './Mycomponents/Addtodo';
function App(){
  const[tod, settodos] = useState([{
       sno : 1,
       title : "hello go to market" ,
       desc: "ok"
  },
  {
    sno : 2,
    title : "hello go to shop" ,
    desc: "ok"
  }]);
  const addtodo = (title,desc)=>{
    console.log("I am adding todos",title,desc);
    let sno = tod[tod.length -1].sno + 1
    const mytodo = {
      sno: sno,
      title: title,
      desc : desc
    }
    settodos([...tod,mytodo]);
    console.log(mytodo);
  }
  const ondelete = (todo) =>{
   console.log("i am on delete",todo);
   settodos(tod.filter((e)=> {
    return e!==todo;
}))
}
  
  return (
    <>
   <Header />
   <Addtodo addtodo = {addtodo}/>
   <Todos  arr = {tod} ondelete = {ondelete}/>
   <Footer/>
    {/* <ul>
      <li><a href="./">boy</a></li>
      <li><b>ok</b></li>
      <li>c</li>
      <li>d</li>
      <li>e</li>

      </ul> 
      <p>hello hey how are you</p>
       */}



    {/* <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. it's my app
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Vaidik
        </a>
      </header>
    </div>   */}
    </>
  );
}

export default App;

