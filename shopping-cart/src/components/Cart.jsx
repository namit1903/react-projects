// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const Cart = () => {
  const { cart, removeCart } = useContext(CartContext);
console.log(cart)
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <button onClick={() => removeCart(item.name)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
