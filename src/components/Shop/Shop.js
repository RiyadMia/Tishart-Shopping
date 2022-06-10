import React from 'react';
import './Shop.css'
const Shop = ( {handelAddToCart,tshart}) => {
    const {name,picture,price}=tshart;
    return (
  <div>
      <h2 className='Shopping'>This Shopping !!!</h2>
    <div className='t-shart'>
        <img src={picture} alt="" />
         <h4>Name : {name}</h4>
         <h3 className='font-colors'>price : $ {price}</h3>
         <button className='btn-colors' onClick={()=>handelAddToCart
         (tshart)}>Add to cart </button>
    </div>
  </div>    
    );
};

export default Shop;