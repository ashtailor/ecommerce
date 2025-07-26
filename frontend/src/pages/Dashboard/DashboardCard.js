import React from 'react'
import { Link } from 'react-router-dom';

export const DashboardCard = ({order}) => {
  return (
    <section className='flex justify-center items-center min-w-5 bg-gray-300 '>
          <div className=' border-2 bg-slate-300 max-w-full px-5 py-5  mx-10 my-10 space-y-1  '>
          <div className='flex justify-between items-center'> 
             <span className='text-base font-semibold'>Order Id: {order.id}</span>
             <span className='text-base font-semibold  mr-2'>Total Amount: ${order.amount_paid}</span>
          </div>

        <div className='divide-y'>
            {order.cartList.map((product) => (
             <div key={product.id} 
                     className="flex items-center gap-2 py-4"> 
                    <Link to = {`/products/${product.id}`}>
                        <img className="w-24 h-24 object-cover rounded" src={product.image_local}
                        />
                    </Link>
    
                    <div className='flex flex-col justify-center'>
                        <Link to={`/products/${product.id}`}>
                            <p className="font-semibold text-lg">{product.name}</p>
                        </Link>

                        <div>
                            <span className="text-gray-700">${product.price}</span>
                        </div>
                            
                    </div>
                </div>
                

                ))}
        </div>

         
    </div>

    </section>
   
      
  );
}
