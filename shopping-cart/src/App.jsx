import React from 'react';

import { CartProvider } from './store/CartContext'
import Product from './components/Product';
import Cart from './components/Cart';

const App = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <CartProvider>
      <div>
        <h1>React Shopping Cart</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '20px' }}>
            <h2>Products</h2>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
