import React from 'react'

function Task({task,handleDelete}) {
  return (
    <div className='todoList'>
    <div className='task'>{task}</div>
    <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default Task
/*uncomment this and also code from TaskList , output will be the same
function Task({key,task,handleDelete}) {
  return (
    <div className='todoList'>
    <div>{task}</div>
    <button onClick={()=>handleDelete(key,task)}>delete</button>
    </div>
  )
}

export default Task

*/