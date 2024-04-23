import React, { useState } from "react";


export const WatchListContext=React.createContext();

export const ListContextProvider=(props)=>{ 
  const defaultStocks=['GOOGL','MSFT','AMZN']
  const[list,setList]=useState(['GOOGL','MSFT','AMZN']);
const addStock=(stock)=>{
  if(list.indexOf(stock)===-1)
setList(...list,stock)
}
const deleteStock=(stock)=>{
 const newList= list.filter((item)=>{
    return item!==stock;
  })
  setList(newList);
}

  return<WatchListContext.Provider value={{list,addStock,deleteStock}}>
{props.children}
  </WatchListContext.Provider>
}