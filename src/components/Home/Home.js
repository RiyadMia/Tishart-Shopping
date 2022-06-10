import React, { useState } from 'react';
import useTshart from '../../useTshart/useTshart';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Home.css'
const Home = () => {
    const [tsharts,setTstarts]= useTshart()
    const [cart,setCart]=useState([])
    const handelAddToCart=(selectedItem)=>{
        const exists = cart.find(tshart => tshart.id === selectedItem.id);
        if(!exists){
            const newCart =[...cart,
                selectedItem]
                 setCart(newCart)
        }
        else{        
           alert('item already add')
        }
    }
    // Remove items

    const handelRemoveCart =(selectedItem)=>{
        const rest = cart.filter(tshart => tshart.id !== selectedItem.id)
        setCart(rest)

    }
     //Choose Random cart btn
    const choiceHandleClick =() =>{
        const rendomItem =chooseOneCart()
        const randomProduct=cart.filter((item)=> item === rendomItem)
        setCart(randomProduct)

    }
    const chooseOneCart =(selectedItem)=>{    
        const newCarts =[...cart,selectedItem]
        newCarts.pop()
        return newCarts[Math.floor(Math.random()*newCarts.length)]     
     }

    return (

 <div>
     <h1 className='heder-color'> Welcome To Tshart Shopping Centar</h1>
      <div className='home-container'>   
     <div className="tshart-contaniar">
      { 
      tsharts.map(tshart=><Shop
      key ={tshart.id}
      tshart={tshart}
      handelAddToCart={handelAddToCart}
      ></Shop>)
      }
    </div>
    <div className="cart-container">
        <Cart cart={cart}
        handelRemoveCart={handelRemoveCart}
        choiceHandleClick ={choiceHandleClick}
        ></Cart>
    </div>
 </div>
 </div>
    );
};

export default Home;