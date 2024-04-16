import { useState,useEffect } from "react"
import data from './data.js'


function Accordian(){
 const[selected,setSelected]= useState();
 const[enableMultipleSelection,setSelection]=useState(false);
 const [multiple,setMultiple]=useState([])
  useEffect(()=>{
    console.log("accordian is mounted")    
  })

  const handleSelection=(id)=>{
      setSelected(selected===id?null:id);
  }
  return<>
  
  
  <div className="container">
  <button onClick={()=>{setSelection(!enableMultipleSelection)}}>Enable multiple selections</button>
    <div className="accordian">
      {
        data && data.length>0 ? (data.map((item)=>(
<div key ={item.id} className="item">
  <div className="title" onClick={()=>{handleSelection(item.id)}}>
    <h3>{item.question}</h3>
       
    <span>+</span></div>
    {
      selected===item.id?
    <div className="answer">{item.answer}</div>:null
}
 
</div>
        ))):<h1>NO data present</h1>
      }
    </div>
  </div>
  </>
}
export default Accordian;