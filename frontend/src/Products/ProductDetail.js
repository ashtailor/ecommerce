import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hook/useTitle";
import { Rating } from "../components/Element/Rating";
import { useCart } from "../components/Context/CartContext";
import { getProduct } from "../service/productService";
import { toast } from "react-toastify";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { cartList, addToCart, removeFromCart } = useCart();

  useTitle(product.name);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    }
    fetchProduct();
  }, [id]);

  const isInCart = cartList.find((item) => item.id === product.id);

  return (
    <section className="flex-1 px-4 py-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-black-800 dark:text-black mb-2">{product.name}</h3>
        <p className="text-gray-900 dark:text-black-800">{product.overview}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
       
        <div className="h-70 w-80 flex justify-center">
          <img
            src={`/${product.image_local}`}
            alt={product.name}
            className="w-full max-w-full rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-1/2 space-y-2 text-gray-800 dark:text-black mt-2" >
        
          <p className="text-xl font-bold text-gray-900 dark:text-blcak mt-2">
            ${product.price}
          </p>
          {product.rating !== undefined && <Rating rating={product.rating} />}

          <div className="flex flex-wrap gap-3 items-center text-sm font-medium">
            {product.best_seller && (
              <span className="px-3 py-1 bg-yellow-400 text-black rounded">
                {product.best_seller}
              </span>
            )}
            <span
                  className={`px-3 py-1 mb-2 rounded border ${
                    product.in_stock ? "border-green-900 text-green-900" : "border-red-900 text-red-900"
                  }`}
                >
                  {product.in_stock ? "In Stock" : "Out of Stock"}
            </span>
            {product.size && (
              <span className="px-3 py-1 rounded border mb-2 border-gray-500 text-black-600 dark:text-black-900">
                {product.size} MB
              </span>
            )}
          </div>
          <div>
            {!isInCart ? (
              <button
                onClick={() => addToCart(product)}
                disabled={!product.in_stock}
                className={`w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-black font-semibold px-5 py-2 rounded transition ${
                  !product.in_stock ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Add to Cart <i className="bi bi-plus-lg ml-2"></i>
              </button>
            ) : (
              <button
                onClick={() => removeFromCart(product)}
                disabled={!product.in_stock}
                className={`w-full sm:w-auto bg-red-500 hover:bg-red-600 text-black font-semibold px-5 py-2 rounded transition ${
                  !product.in_stock ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Remove from Cart <i className="bi bi-trash ml-2"></i>
              </button>
            )}
          </div>

          
          {product.long_descrption !== product.overview && (
            <div className="text-black-900 dark:text-black-600">
              <p>{product.long_descrption}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
