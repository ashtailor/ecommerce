import React from 'react';
import { useFilter } from '../../components/Context/FilterContext';

export const Filterbar = ({ setShow }) => {
  const { state, dispatch } = useFilter();

  return (
    <section className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-end items-center mb-4 ">
       
        <button
          onClick={() => setShow(false)}
          className="text-sm text-gray-500 hover:text-black mr-5"
          type="button"
        >
          ✕ Close
        </button>
      </div>

      {/* Sort By */}
      <div className="mb-4 ">
        <h3 className="text-lg font-medium mb-2">Sort By</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="Low to High"
              checked={state.sortBy === "Low to High"}
              onChange={() => dispatch({ type: "SORT_BY", payload: { sortBy: "Low to High" } })}
              className="accent-blue-500"
            />
            <span>Low to High</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="High to Low"
              checked={state.sortBy === "High to Low"}
              onChange={() => dispatch({ type: "SORT_BY", payload: { sortBy: "High to Low" } })}
              className="accent-blue-500"
            />
            <span>High to Low</span>
          </label>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Rating</h3>
        <div className="space-y-2">
          {["4", "3", "2", "1"].map((star) => (
            <label key={star} className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                value={`${star} Star & Above`}
                checked={state.ratings === `${star} Star & Above`}
                onChange={() =>
                  dispatch({ type: "RATINGS", payload: { ratings: `${star} Star & Above` } })
                }
                className="accent-yellow-500"
              />
              <span>{`${star} Star & Above`}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Other Filters */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Other Filters</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={state.bestSellerOnly}
              onChange={() =>
                dispatch({
                  type: "BEST_SELLER_ONLY",
                  payload: { bestSellerOnly: !state.bestSellerOnly },
                })
              }
              className="accent-green-500"
            />
            <span>Best Seller Only</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={state.onlyInStock}
              onChange={() =>
                dispatch({
                  type: "ONLY_IN_STOCK",
                  payload: { onlyInStock: !state.onlyInStock },
                })
              }
              className="accent-green-500"
            />
            <span>Only In Stock</span>
          </label>
        </div>
      </div>

      {/* Clear Button */}
      <button
        onClick={() =>
          dispatch({
            type: "CLEAR_FILTER",
            payload: {
              sortBy: null,
              ratings: null,
              bestSellerOnly: false,
              onlyInStock: false,
            },
          })
        }
        type="button"
        className="w-full py-2 mt-2 text-center border border-black text-black font-medium rounded-md hover:bg-gray-100 transition"
      >
        Clear Filters
      </button>
    </section>
  );
};
