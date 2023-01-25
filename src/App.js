
 import React,{useState} from 'react';
 import './App.css'
  

function App() 

{
  const[todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);

  function singletodo(event)
  {
    setTodo(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input onChange={singletodo} value={todo} type="text" placeholder="🖊️ Add item..." />
        <  i onClick={()=>setTodos([...todos,todo])} className="fas fa-plus" ></i>
      </div>
      <div className="todos">
      {
      todos.map((value)=>{      
         return( <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{value}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
      })}
      </div>
      

    </div>
  );
}
export default App;
















