import { useEffect,useState} from "react"
import { useParams } from "react-router-dom"//to keep track of the url parameters
//lets fetch the data for the stock detail page component
import finnHub from "../api/finnHub"

export default function StockDetail(){
  const {symbol}=useParams();
  const[chartData,setChartData]=useState();
  useEffect(()=>{
const fetchData=async()=>{
  
  const date=new Date();
  const currentTime=Math.floor(date.getTime()/1000);
  let oneDay=currentTime-24*60*60;//1days ago
  if(date.getDay()===6){
    oneDay=currentTime-2*24*60*60;
  }
  else if(date.getDay()===0){
    oneDay=currentTime-3*24*60*60//2 days ago
  }
  const oneWeek = currentTime-7*24*60*60;
  const oneYear = currentTime-365*24*60*60;
try
{//get responses
  const responses=await Promise.all([finnHub.get('/stock/quote',{params:{
    symbol,
    from:oneDay,
    to:currentTime,
    resolution:30
    //replace quote with candle
  }}), finnHub.get('/stock/qoute',{params:{
    symbol,
    from:oneWeek,
    to:currentTime,
    resolution:60
  }}),finnHub.get('/stock/quote',{params:{
    symbol,
    from:oneYear,
    to:currentTime,
    resolution:"W"
  }})            ])
 
  console.log("jawab mila",responses);
}
  catch(error){
    console.log("errOr hai bhai detail me=>",error)
  }

}
//now call fetchdata ya call api
fetchData();    
}
,[])
  return <>
  <div>Symbol is {symbol}</div>
  
  </>
}