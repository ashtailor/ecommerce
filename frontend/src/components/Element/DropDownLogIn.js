import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout, getUser } from '../../service';

export const DropDownLogIn = ({ setDropDown }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const handleLogout = useCallback(() => {
    logout();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('cbid');
    setDropDown(false);
    navigate('/');
  }, [navigate, setDropDown]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser();
        data.email ? setUser(data) : handleLogout();
      } catch (error) {
        handleLogout();
      }
    }
    fetchData();
  }, [handleLogout]);

  if (!user) return null;

  return (
    <div className="relative mt-4">
      <div
        id="dropdownAvatar"
        className="absolute top-full right-0 z-50 mt-10 w-48 bg-white rounded-md shadow-lg border border-gray-200 dark:bg-gray-200 dark:border-gray-700"
      >
        
        <div className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-800 border-b border-gray-200 dark:border-gray-600">
          {user.email}
        </div>

        
        <ul className="py-1 text-sm text-gray-600 dark:text-gray-800 ">
          <li>
            <Link
              onClick={() => setDropDown(false)}
              to="/products"
              className="block mt-2 px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-black"
            >
              All eBooks
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setDropDown(false)}
              to="/dashboard"
              className="block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-black"
            >
              Dashboard
            </Link>
          </li>
        </ul>

       
        <div className="px-4 py-2">
          <button
            onClick={handleLogout}
            className="w-full text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
