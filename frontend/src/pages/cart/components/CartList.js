import React, { useState } from 'react'
import { CartCard } from './CartCard';
import {Checkoutpop} from "./Checkoutpop";
import { useCart } from '../../../components/Context/CartContext';

export const CartList = () =>
    {
        const [checkout,setcheckout] = useState(false);
        const{cartList,total} = useCart();
        
        return(
            <>
                <div className='max-w-xl mx-auto p-4 mt-0'>
                <section>
                         <p className='text-2xl font-bold text-center text-black underline underline-offset-1'>Shopping Cart({cartList.length})</p>
                </section>

                <section className='mt-3 mb-2'>
                    { cartList.map((product) => (
                        <CartCard key={product.id} product={product} />
                    ))}
                </section>

                <section >
                    <div>
                        <p className='flex items-center space-x-4 justify-end'>
                            <span className='text font-bold hover:bg-yellow-300 px-2 py-2 text-blue-950'>Total Amount: </span>
                            <span className='text font-normal text-gray-700 right-5'>${total}</span>
                        </p>
                    </div>
                </section>

               <div className="flex justify-end mt-3 px-2 py-5">
                    <button
                        onClick={() => setcheckout(true)}
                        type="button"
                        className="flex items-center hover:bg-blue-500 bg-red-500 text-white font-medium border rounded-sm px-4 py-2"
                    >
                        <span>PLACE ORDER</span>
                        <i className="ml-2 bi bi-arrow-right text-white"></i>
                    </button>
                </div>
            </div>
            {checkout && <Checkoutpop  setcheckout = {setcheckout}/>}
            </>
        );
    
};
