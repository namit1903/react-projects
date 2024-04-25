 import { createContext, useState } from "react";
 const CartContext=createContext();
 const CartProvider=({children})=>{
  const [cart,setCart]=useState([])
  const addCart = (item)=>{
    setCart([...cart,item])
  }
const removeCart = (item)=>{
  const newCart=cart.filter((arr)=>{return arr.name!=item})
  setCart(newCart);

}
return(
<CartContext.Provider value={{cart,addCart,removeCart}}>
  {/* why double braces */}
  {children}
</CartContext.Provider>)
 }
export {CartContext,CartProvider};