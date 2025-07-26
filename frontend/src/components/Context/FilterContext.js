import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filterReducer";

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  const initialProductList = (products) => {
    dispatch({
      type: "PRODUCT_LIST",
      payload: { products },
    });
  };

  const inStock = (products) => {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  };

  const bestSellerOnly = (products) => {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  };

  const sort = (products) => {
    if (state.sortBy === "Low to High") {
      return [...products].sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "High to Low") {
      return [...products].sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  };

  const rating = (products) => {
    if (state.ratings === "4 Star & Above") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.ratings === "3 Star & Above") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.ratings === "2 Star & Above") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.ratings === "1 Star & Above") {
      return products.filter((product) => product.rating >= 1);
    }
    return products;
  };

  const filteredProductList = rating(
    sort(inStock(bestSellerOnly(state.productList)))
  );

  const value = {
    state,
    dispatch,
    products: state.productList,
    filteredProductList,
    initialProductList,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
