import{useEffect, useRef, useState} from 'react'
import { Outlet } from 'react-router-dom';

function App() {
const myref=useRef();
const [state, setState]=useState("");
let newValue="";
const handleChange=(e)=>{
  // console.log(e) ;
  console.log(myref.current.value+"handle onchange chala") ;
  setState(myref.current.value)
  newValue=e.target.value;
 
}        
useEffect(()=>{
console.log("mounting or updating hua")
//cleanup function
return function sum(){
  console.log("unmounting hua hai bhai maje kro value is:"+state)
}
},[state])       
  return (
    <>
      <input type="text" ref={myref} onChange={handleChange} />
      <p>the value entered is {state}</p>
      <Outlet/>
    </>
  )
}

export default App
