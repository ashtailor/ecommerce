import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../Section/Search';
import { DropDownLogIn } from '../Element/DropDownLogIn';
import { DropDownLogOut } from '../Element/DropDownLogOut';
import { useCart } from '../Context/CartContext';

export const Header = () => {
  const { cartList } = useCart();
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const [searchSection, setSearchSection] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [showCartTitle, setShowCartTitle] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          
      
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/assets/Image/CodeBook2.jpg"
              alt="CodeBook"
              className="w-40 h-28 object-contain dark:brightness-75"
            />
            <span className="text-3xl font-bold text-gray-800 dark:text-white">
              CodeBook
            </span>
          </Link>

         
          <div className="flex items-center space-x-6 text-2xl text-gray-700 dark:text-gray-300">

            
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="bi bi-gear-wide-connected cursor-pointer hover:text-black dark:hover:text-white transition"
              title="Toggle Dark Mode"
            ></span>

            
            <span
              onClick={() => setSearchSection(!searchSection)}
              className="bi bi-search cursor-pointer hover:text-black dark:hover:text-white transition"
              title="Search"
            ></span>

            
            <Link
              to="/cart"
              title="Cart"
              onClick={() => {
                setShowCartTitle(true);
                setTimeout(() => setShowCartTitle(false), 2000);
              }}
              className="relative hover:text-black dark:hover:text-white transition"
            >
              <span className="bi bi-cart-fill relative">
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                  {cartList.length}
                </span>
              </span>
            </Link>

            
            <span
              onClick={() => setDropDown(!dropDown)}
              className="bi bi-person-circle cursor-pointer hover:text-black dark:hover:text-white transition"
              title="Account"
            ></span>

            
            {dropDown &&
              (token ? (
                <DropDownLogIn setDropDown={setDropDown} />
              ) : (
                <DropDownLogOut setDropDown={setDropDown} />
              ))}
          </div>
        </div>
      </nav>

     
      {searchSection && <Search />}
    </header>
  );
};
