import { Outlet } from "react-router-dom";
import Search from "../components/Search";
import StockList from "../components/StockList";
import React from 'react';
export default function Summary(){
  const MyContext=React.createContext();
  return(
  <>
  <h1>ye summary hai</h1>
  {/* <MyContext.Provider value={}> */}

 <StockList/>

  {/* </MyContext.Provider> */}

  </>)
}