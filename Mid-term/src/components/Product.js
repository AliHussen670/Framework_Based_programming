
import React, { useState } from 'react';
import axios from 'axios';

export default function Product(props) {
  const {  onAdd } = props;
const [products, setproducts] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:3001/product'
    );

    setproducts(response.data);
  };
  

  return (
    <div className="App">
      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Product Menu
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="products">
        {products &&
          products.map((product, index) => {
           
            return (
              <div className="product" key={index}>

                <div className="details">
                  <img src  = 
                   {product.Gambar}width={100} height={100}/>
                  <p>ID: {product.ID}</p>
                  <p>PRODUCT NAME: {product.productName}</p>
                  <p>PRICE: {product.Harga}</p>
                  <p>STOK: {product.Stok}</p>
                
                </div>
                <div>
                <button onClick={() => onAdd(product)}>Add To Cart</button> 
                 </div>
               
              </div>
            );
          })}
      </div>

      
    </div>
  );
}


