import { createContext, useState } from "react";

export const TaskContext=createContext();//created a context

const defaultTasks=['gym jao', 'khana khao']
export function TaskProvider({children}){
  const [tasks,setTask]=useState(defaultTasks);
  //add function
  const handleAdd=(task)=>{
    console.log('ye h task ',task)
    let newtasks=[...tasks,task];
    console.log('ye h task ',newtasks)
    setTask(newtasks);
  }
  //delete
  const handleDelete=(idx,todo)=>{
    console.log("idx and todo "+idx," ",todo)
let newtasks=tasks.filter((item,index)=>(item!==todo && index!==idx));
setTask(newtasks);

  }

  return(
 <TaskContext.Provider value={{tasks,handleAdd,handleDelete}}>
  {children}
  </TaskContext.Provider>)
 
}