import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { useFilter } from '../../components/Context/FilterContext';
import { useLocation } from 'react-router-dom';
import { useTitle } from '../../hook/useTitle';
import { Filterbar } from './Filterbar';
import { getProductList } from '../../service/productService';
import { toast } from 'react-toastify';

export const ProductList = () => {
  useTitle('Explore eBooks Collection');

  const { productList, initialProductList, filteredProductList } = useFilter();
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get('q');

  useEffect(() => {
    async function fetchProducts() 
    {
      try {
        const data = await getProductList(searchTerm);
        initialProductList(data);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('❌ Sorry, Server Error! Failed to fetch');
      }
    }
    fetchProducts();
  }, [searchTerm]);

  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-slate-900">
      
      <section className="my-10 mt-5">
        <div className="flex items-center justify-between px-6 md:px-12">
          <span className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mt-5 hover:bg-yellow-400">
            All eBooks ({filteredProductList.length})
          </span>

          <button
            onClick={() => setShow(!show)}
            className="p-2 rounded-lg bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-white border dark:border-gray-600 focus:outline-none"
            title="Toggle Filter"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 4 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </button>
        </div>

        
        <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
          {errorMessage && (
            <div className="w-full text-center text-red-500 font-semibold">{errorMessage}</div>
          )}
          {filteredProductList.map((product) => (
            <ProductCard key={product.id} product={product} size="small" />
          ))}
        </div>
      </section>

     
      {show && (
        <div className="absolute top-24 left-6 z-50 bg-white dark:bg-gray-800 shadow-lg border rounded-lg p-6 w-80 mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Filters</h3>
            <button
              onClick={() => setShow(false)}
              className="text-gray-500 hover:text-red-500 text-lg"
              aria-label="Close Filter"
            >
              ✖
            </button>
          </div>
          <Filterbar setShow={setShow} />
        </div>
      )}
    </main>
  );
};
