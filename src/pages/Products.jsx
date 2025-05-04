import React from 'react';
import './Product.css';

import products from "../data/product"; 



import { Link } from 'react-router-dom'

function Products() {


  return (
   <>
     <div className='Products'>
     {products.map((product) => (
  <Link to={`/product/${product.id}`} key={product.id} className='grid-item'>
    <img src={product.image} alt={product.title} />
    <div className='Brand'>
      <h3>{product.title}</h3>
      <p>Rs .{product.price}</p>
      <p>{product.Powered}</p>
    </div>
  </Link>
))}


    </div>
   
   </>
    
  );
}

export default Products;
