import React from 'react'
import { HomePage } from '../pages/Home/components/HomePage'
import { ProductList } from '../Products/components/ProductList'
import { ProductDetail } from '../Products/ProductDetail'
import {Routes, Route, Navigate } from 'react-router-dom'
import {Register} from "../Products/Register"
import { Login } from '../Products/Login'
import { OrderPage } from '../pages/Order/OrderPage'
import { CartPage } from '../pages/cart/CartPage'
import { CartList } from '../pages/cart/components/CartList'
import { ProtectedRoutes } from './ProtectedRoutes' 
import { DashboardPage } from '../pages/Dashboard/DashboardPage'
import { PageNotFound } from '../Products/PageNotFound'

export const Allroutes = () => {
  const token = true;
  return (
    <>
          <Routes>
              <Route path = "/" element={<HomePage/>}/>
              <Route path="/products" element={<ProductList/>}/>
              <Route path="/products/:id" element={<ProductDetail/>}/>
              <Route path='/login' element ={<Login/>}/>
              <Route path='/register' element={<Register/>}/>

              <Route path='/cart' 
                    element={
                      <ProtectedRoutes>
                          <CartPage/>
                      </ProtectedRoutes>}
              />
              
              <Route path="/order-summary" 
                    element={
                        <ProtectedRoutes>
                            <OrderPage/>
                        </ProtectedRoutes>}>
              </Route>

              <Route path='/dashboard' 
                    element={
                      <ProtectedRoutes>
                          <DashboardPage/>
                      </ProtectedRoutes>}
                    >
              </Route>

              <Route path='*'
                element ={<PageNotFound/>}
                >
              </Route>
            </Routes>
    </>
  )
}
