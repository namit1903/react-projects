import React from 'react'
import { useState } from 'react'
import TaskList from './TaskList'
function Input() {
  const [tasks,setTask]=useState([])
let input=''
  const handleInput = (e) =>{
    input=e.target.value;

  }
  const handleClick=()=>{
if (input!='')
  setTask([...tasks,input]);
  }
  const handleDelete = function(idx,todo){
    //todo inxex is undefined
  console.log(todo,"input me delete hai");
  console.log(idx,"index deldeted");
  setTask(tasks.filter((item,index)=>(index!=idx)))//why i have to filter this based on either index or item value , why can't i use both consitions like, index!=idx && item!=todo
  }
  return (
    <div>
      <input type="text" placeholder="Enter Task" id="inputTask" onChange={handleInput}/>
      <button onClick={handleClick} className="btn btn-add"> Add Task</button>
      <TaskList handleDelete={handleDelete} tasks={tasks}/>

    </div>
  )
}

export default Input
