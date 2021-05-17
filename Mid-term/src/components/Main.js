import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="column">
        {/* {products.map((product) => (
          <Product key={product.ID} product={product} onAdd={onAdd}></Product>
          
        ))} */}
         <Product key={products.ID} onAdd={onAdd}/>
      </div>
    
    </main>
  );
}
