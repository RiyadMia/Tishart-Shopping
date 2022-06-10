import React from 'react';
import { Link } from 'react-router-dom';
import './Heder.css'
const Heder = () => {
    return (
     <nav className='nav-heder'>
         <h1>Tshart Shopping </h1>
         <div>
            <Link to="/home">Home</Link>
            <Link to="/order">Order</Link>
            <Link to ="/shop">Shop</Link>
            <Link to ="/about">About</Link>
         </div>   
     </nav>
    );
};

export default Heder;