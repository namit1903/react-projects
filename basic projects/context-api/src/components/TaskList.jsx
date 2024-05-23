import React, { useContext } from 'react'
import Task from './Task';
import { TaskContext } from '../store/Context';
function TaskList() {
  
  // const handleDelete = function(){
  // console.log('delet clicked')
  // }
  let {tasks} =useContext(TaskContext);
  console.log("heu",tasks);
    return (
     <React.Fragment>
        {tasks.map((todo,index)=>(
      <Task key={index} indexx={index} task={todo} />
        )
  )}
     </React.Fragment>
    )
  }
  
  export default TaskList

/*//Although this is also correct but the better way is above
function TaskList({tasks,handleDelete}) {
console.log("heu",tasks);
// const handleDelete = function(){
// console.log('delet clicked')
// }
  return (
   <React.Fragment>
      {tasks.map((todo,index)=>(
    <Task key={index} task={todo} handleDelete={handleDelete}/>
      )
)}
   </React.Fragment>
  )
}

export default TaskList
*/
