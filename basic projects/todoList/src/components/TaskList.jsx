import React from 'react'
import Task from './Task';
function TaskList({tasks,handleDelete}) {
  console.log("heu",tasks);
  // const handleDelete = function(){
  // console.log('delet clicked')
  // }
    return (
     <React.Fragment>
        {tasks.map((todo,index)=>(
      <Task key={index} task={todo} handleDelete={()=>handleDelete(index,todo)}/>
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
