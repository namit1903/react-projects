import React from 'react'
import {useState, useContext } from 'react'
import TaskList from './TaskList'
import { TaskContext } from '../store/Context';

let tt=document.getElementById('inputTask')
function Input() {
  let input='';
  const [newTask, setNewTask] = useState('');
  /*
  // const [tasks,setTask]=useState([])
  */
  let {handleAdd}=useContext(TaskContext);
  // const handleInput = (e) =>{
  //   input=e.target.value;
  //   console.log("input liya")

  // }

  const handleClick=()=>{
    console.log("input lena33")
    if (newTask!=''){
      handleAdd(newTask);
    console.log("input lena ji")
    console.log(newTask)}
    // setNewTask('')
  
      }

  return (
    <div>
      <input type="text" placeholder="Enter Task" id="inputTask" onChange={(e) => setNewTask(e.target.value)} />
      <button  className="btn btn-add" onClick={handleClick}> Add Task</button>
      <TaskList />

    </div>
  )
}

export default Input
