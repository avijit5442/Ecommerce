import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from '../Components/ProductDetails'
import Cart from '../Components/Cart'
import Checkout from '../Components/Checkout'
import Layout from '../Layout/Layout'

const RouteTable = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/" element={<ProductDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            </Route>
          </Routes>
        </BrowserRouter>

    </div>
  )
}

export default RouteTable
