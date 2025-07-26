import React from 'react'
import { Link } from 'react-router-dom'

export const CartEmpty = () => {
  
  return (
    <section className="text-center text-black py-10">
        <div>
            <p className= "bi bi-cart-fill text-green-700 text-7xl mb-6"></p>
            <p className='text-normal text-black-500'>OOPs! your cart look Empty</p>
            <p className='text-normal text-black-600'>ADD ebooks to your cart from our store collection</p>
        </div>
        <Link to = "/products" type="button" className="inline-block px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition"
      ><i className="bi bi-cart-fill mr-2"></i>Continue Shopping</Link>
    </section>
  );
}
