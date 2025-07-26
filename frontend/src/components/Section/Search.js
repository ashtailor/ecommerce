import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/products?q=${searchRef.current.value}`);
  };

  return (
    <div className="mx-auto max-w-screen-md px-4 py-6">
      <form onSubmit={handleSearch} className="flex items-center w-full gap-3">
        <div className="relative w-full">
          <span className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
          <input
            ref={searchRef}
            type="search"
            name="search"
            id="search"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-sm"
          />
        </div>
        <button
          type="submit"
          title="Search"
          className="px-4 py-2.5 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition"
        >
          <i className="bi bi-search" />
        </button>
      </form>
    </div>
  );
};
