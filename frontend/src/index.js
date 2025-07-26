import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ScrolltoTop } from './components/index.js';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast  } from 'react-toastify';
import { CartProvider } from './components/Context/CartContext.js';
import { FilterProvider } from './components/Context/FilterContext.js';
import { useFilter } from './components/Context/FilterContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
            <FilterProvider>
              <CartProvider>
                  <ScrolltoTop/>
                    <App />
                    <ToastContainer closeButton={false} position='bottom-right' autoClose={3000}/>
            </CartProvider>
            </FilterProvider>
      </Router>
  </React.StrictMode>
);

