import { Outlet } from "react-router-dom";
import Search from "../components/Search";
import StockList from "../components/StockList";

export default function Summary(){
  return(
  <>
  <h1>ye summary hai</h1>
 <Search/>
 
 <StockList/>
  </>)
}