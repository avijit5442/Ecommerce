import React from 'react'
import { UseCountState } from '../StateManagement/Context'

const Cart = () => {
    const {cartCount}=UseCountState()
    console.log("count",cartCount);
  return (
    <>
    <div>
     {cartCount > 0 ? cartCount : 0} items in your cart
    </div>
    {
      cartCount > 0 ?
      <button className="bg-red-500 text-white px-4 py-2 m-2 rounded-md">
        Checkout
      </button>
      :
      ""
    }
    </>


  )
}

export default Cart
