import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'
const Cart = ({cart,handelRemoveCart,choiceHandleClick}) => {
    // condional render options 
    // 1. Element variable 
    // 2. Ternary operator condition ? item : falce 
    // 3. && oparator 
    // 4.|| oparator
    let commant;
    if(cart.length === 0){

        commant= <h5>Please Add a one item !!!</h5>
    }
    else if(cart.length === 1){
        commant = <h5>please add more.</h5>

    }
    else{
        commant = <h5>Thanks for adding item </h5>
    }
    
    return (
        <div  className='home-cart'>
            <h2>Item selected : {cart.length}</h2>
            {commant}
          {
              cart.map(tshart => <h4> <img className='img-size' src={tshart.picture} alt="" />{tshart.name}
              <button className='red-btn' onClick={()=>handelRemoveCart(tshart)}> <FontAwesomeIcon className='fatrush' icon={faTrash}></FontAwesomeIcon></button>
              </h4>
                )
          }
          {cart.length === 0 || <h3 className='font-color'> YAY !!!  You are buying...! </h3>}

          {cart.length === 3 &&
           <div className='orange'>
              <h3>Trigonal</h3>
             <p>Tin Jon ka gift diba </p>
          </div>}
          {cart.length !== 4 ? <h3 className='keep-add'>keep adding </h3> : <button className='remove-all'> Remove All </button>}
          {cart.length === 4 && <button className='btn' onClick={()=>choiceHandleClick()}> Rendom Odear </button>}
        </div>
    );
};

export default Cart;