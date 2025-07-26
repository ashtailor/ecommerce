import React from 'react'
import { ProductCard } from '../../../components/ProductCard';
import { useEffect,useState } from 'react'
import { getFeaturedList } from '../../../service/productService';
import { toast } from 'react-toastify';
export const FeaturesProd = () => {
    const[products, setproducts] = useState([]);
    const[errorMessage,setErrorMessage] = useState("");
    
    useEffect(()=> {
        async function fetchproducts()
        {
            try{

              const data = await  getFeaturedList()
                console.log("Fetched data:", data);
                setproducts(data);

            }catch(error)
            {
              setErrorMessage("Sorry, Server Error! failed to fetch")
            } 
        }
        fetchproducts();
    },[])
  return (
   <section className='text-center  max-w-screen-xl mx-auto '>
        <h1 
          className='font-semibold text-3xl text-center  dark:text-gray-800 mt-5 mb-8 underline underline-offset-4 mx-auto w-fit block'>
            Featured eBooks
        </h1>

        {errorMessage && (
        <div className="bg-red-100 text-red-700 px-4 py-2 mb-6 rounded-md text-center">
          {errorMessage}
        </div>
      )}

        <div className='flex flex-wrap justify-center gap-8'>
          {products.map((product)=> (
              <ProductCard key={product.id} product={product}/>
          ))}
            
        </div>

   </section>
  )
}

