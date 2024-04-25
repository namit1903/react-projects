import React,{useContext} from 'react'
import {CartContext} from '../store/CartContext'
const Product=({product})=>{
  const {addCart}=useContext(CartContext);//destructuring
return(
<div>
<h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addCart(product)}>Add to Cart</button>
</div>)
}
export default Product;