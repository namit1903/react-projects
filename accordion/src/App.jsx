import { useEffect} from 'react'
import './App.css'
import Accordian from './components/Accordian'


function App() {
  useEffect(()=>{
    console.log("data mounted")
  })
  return(<>
    
    <Accordian></Accordian>
    </>
  ) 
 
  
}

export default App
