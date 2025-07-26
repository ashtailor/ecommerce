import React, { useState, useEffect } from 'react';
import { useCart } from '../../../components/Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { createOrder, getUser } from '../../../service/dataService';

export const Checkoutpop = ({ setcheckout }) => {
  const { total, cartList, clearCart } = useCart();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const data = await getUser();
      setUser(data);
    }
    fetchUser();
  }, []);

  async function handleOrderSubmit(event) {
    event.preventDefault();
    try {
      const data = await createOrder(cartList, total, user);
      clearCart();
      navigate('/order-summary', { state: { data: data, status: true } });
    } catch (error) {
      navigate('/order-summary', { state: { status: false } });
    }
  }

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg relative p-6">
        {/* Close Button */}
        <button
          onClick={() => setcheckout(false)}
          type="button"
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>

       
        <h4 className="text-xl font-bold mb-4 text-center text-gray-800 flex items-center justify-center gap-2">
          <i className="bi bi-credit-card text-2xl"></i>
          CARD PAYMENT
        </h4>

        
        <form onSubmit={handleOrderSubmit} className="space-y-4 text-black font-medium">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Name:
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm font-medium"
              type="text"
              name="name"
              id="name"
              value={user.name || ''}
              readOnly
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email:
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm font-medium"
              type="email"
              name="email"
              id="email"
              value={user.email || ''}
              readOnly
            />
          </div>

          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-900">
              Card Number:
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm font-medium"
              type="text"
              name="cardNumber"
              id="cardNumber"
              value="4215 9874 5612 3"
              readOnly
            />
          </div>

          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-900">
              Expiry Date:
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm font-medium"
              type="text"
              name="expiryDate"
              id="expiryDate"
              value="03/27"
              readOnly
            />
          </div>

          <div>
            <label htmlFor="securityCode" className="block text-sm font-medium text-gray-900">
              Security Code:
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm font-medium"
              type="number"
              name="securityCode"
              id="securityCode"
              value="523"
              readOnly
            />
          </div>

         
          <p className="text-green-700 font-bold text-center text-xl mt-4">${total}</p>

        
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded py-2 flex items-center justify-center gap-3"
          >
            <i className="bi bi-file-earmark-lock2-fill"></i> Pay Now
          </button>
        </form>
      </div>
    </section>
  );
};
