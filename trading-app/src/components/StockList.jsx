import { useState,useEffect } from "react";
import { BsCaretUpFill,BsCaretDownFill } from "react-icons/bs";
import finnHub from "../api/finnHub.js"
import Search from "./Search.jsx";
function StockList(){
  const defaultStocks=['GOOGL','MSFT','AMZN']
  const[list,setlist]=useState(defaultStocks);
  const[stock,setStocks]=useState([]);
   const changeColor=(change)=>{
    return change>0?"success":"danger"
   };
   const renderIcon=(change)=>{
    return change>0?<BsCaretUpFill />:<BsCaretDownFill />
   }

  useEffect(()=>{
    let isMounted=true;
    const fetchData=async()=>{ 
      try{
       const responses=await Promise.all(list.map((item)=>{
        return finnHub.get('/quote',{
          params:{
            symbol:item
          }
        })
       }))
      //  console.log(responses);
       const stockData=responses.map((res)=>{
        return{
        data:res.data,  
        symbol:res.config.params.symbol}
        })
       console.log(stockData);
       if(isMounted){
          setStocks(stockData);//state changes with the array of objects
       }
    

      }catch(error){
        console("errOr is:",error);
      }
    }
    fetchData(); 
    return ()=> isMounted=false;
  },[])// useEffect runs only when the component mounts therefore dependency array is empty[]
  return(<div>

<table class="table table-dark table-hover">
  <thead>
  <tr>
    <th>Name</th>
    <th>Last</th>
    <th>Chg</th>
    <th>Chg%</th>
    <th>High</th>
    <th>Low</th>
    <th>Open</th>
    <th>Pclose</th>
  </tr></thead><tbody>
    {
      stock.map((itemData)=>{
        return(
        <tr className="table-row" key={itemData.symbol}>
          <td>{itemData.symbol}</td>
          <td>{itemData.data.c}</td>
          <td className={`text-${changeColor(itemData.data.d)}`}>{itemData.data.d}{renderIcon(itemData.data.d)}</td>
          <td classsName={`text-${changeColor(itemData.data.dp)} `}>{itemData.data.dp}{renderIcon(itemData.data.dp)}</td>
          <td>{itemData.data.h}</td>
          <td>{itemData.data.l}</td>
          <td>{itemData.data.o}</td>
          <td>{itemData.data.pc}</td>
        </tr>)
      })
    }
  </tbody>
</table>
  </div>)
}
export default StockList;