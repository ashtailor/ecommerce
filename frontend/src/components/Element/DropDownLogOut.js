import React from 'react';
import { Link } from 'react-router-dom';

export const DropDownLogOut = ({ setDropDown }) => {
  return (
    <div className="relative">
      <div
        id="dropdownAvatar"
        className="absolute top-full right-0 z-50 mt-5 w-48 bg-white rounded-md shadow-lg border border-gray-200 dark:bg-gray-200 dark:border-gray-700"
      >
        {/* Close (X) button */}
        <div className="flex justify-end px-2 pt-2">
          <button
            onClick={() => setDropDown(false)}
            className="text-gray-500 hover:text-red-600 text-lg font-bold focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <ul
          className="py-1 text-sm text-gray-600 dark:text-gray-800"
          aria-labelledby="dropdownUserAvatarButton"
        >
          <li>
            <Link
              onClick={() => setDropDown(false)}
              to="/products"
              className="block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-black"
            >
              All eBooks
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setDropDown(false)}
              to="/login"
              className="block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-black"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setDropDown(false)}
              to="/register"
              className="block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-black"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
