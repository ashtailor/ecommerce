import React from 'react';
import { useCart } from '../../../components/Context/CartContext';

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 border rounded-lg p-4 bg-white text-black shadow-sm">
      
      <img
        className="w-24 h-24 object-cover rounded-md"
        src={product.image_local}
        alt={product.name}
      />

      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between items-start">
          <h3 className="text-normal font-semibold text-gray-900 ">{product.name}</h3>
          <span className="text-sm font-semibold text-green-700">${product.price}</span>
        </div>

        <button
          onClick={() => removeFromCart(product)}
          className="mt-3 self-start text-sm text-red-600 hover:text-yellow-700 font-medium transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
