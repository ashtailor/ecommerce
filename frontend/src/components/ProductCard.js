import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Rating} from "./Element/Rating";
import { useCart } from './Context/CartContext'
import { useState } from 'react'
import { ProductDetail } from '../Products/ProductDetail';

export const ProductCard = ({product}) => 
        {
            const {cartList, addToCart, removeFromCart} = useCart();
            const[isInCart, setInCart] = useState(false);
            const{ id, name, overview, image_local ,price, best_seller, rating, in_stock, long_descrption} = product;

            useEffect(()=>{
                   const productInCart = cartList.find(item => item.id === product.id);
                   if(productInCart)
                   {
                        setInCart(true);
                   }
                   else{
                        setInCart(false);
                   }

                    }, [cartList, product.id]);
    
    function handleClick(product)
    {
        console.log("Adding to cart: ", product);
        addToCart(product);
    }
    return (
    <div className='w-56 bg-white  rounded-lg border border-gray-400 dark:border-gray-600shadow-sm 
              m-2 p-3 flex flex-col justify-between dark:bg-grey-400'>

        <Link to= {`/products/${id}`} className='relative'>
           { best_seller && (
              <span className='absolute top-1 right-1 px-2 py-2 bg-orange-400  text-xs rounded-lg shadow-sm m-2 p-2 flex flex-col justify-between' >
                Best Seller
              </span>)} 
            <img className="rounded-md mx-auto w-30 h-40 object-cover mt-2 px-3 py-2  " src= {`/${image_local}`} alt= {name} />
        </Link>

              <div className="text-center px-1 mt-2">
        <Link to={`/products/${id}`}>
          <h5 className="font-bold text-normal leading-tight">{name}</h5>
        </Link>

        <div className="flex justify-center mt-[2px]">
          <Rating rating={rating} />
        </div>

        <p className="text-normal text-cente text-black-900 dark:text-black line-clamp-2 mt-2 mb-4">
          {overview}
        </p>
      </div>

        <div className="flex justify-between items-center px-1 mt-auto">
          
            <span className="text-sm font-bold text-gray-900 dark:text-black">
                $
            <span>
            </span>
                {price}
            </span>

          {!isInCart && <button onClick={()=> addToCart(product)} className={`inline-flex items-center px-2 text-normal  bg-red-500 hover:bg-blue-400 rounded text-white ${product.in_stock? "" : "cursor-not-allowed"}`}>Add Cart  <i className="bi bi-plus-lg"></i></button>}
          {isInCart && <button onClick={()=> removeFromCart(product)} className={`inline-flex items-center px-2 py-2  bg-red-500 hover:bg-red-500 rounded text-white ${product.in_stock? "" :"cursor-not-allowed"}`}>Remove  <i className="bi bi-trash"></i></button>}
        </div>

      

    </div>
  );
};