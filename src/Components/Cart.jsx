import React from 'react'
import { UseCountState } from '../StateManagement/Context'
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cartItems, setCartItems} = UseCountState()
    console.log("cartItemsC",cartItems);
    const deleteFromCart=(id)=>{
     const updatedCart = cartItems.flat().filter(item => item.id !== id);
     setCartItems(updatedCart);
    }
  return (
    <>
    <div>
     {cartItems ?.length <= 0 ? "Please Add items to continue" : ""}
    </div>
    {
      cartItems ?.length > 0 ?
      cartItems?.flat().map((item)=>{
        return(
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="flex items-center space-x-4">
            <img
              src={item.image} // Replace with the actual image source
              alt={item.name}
              className="h-12 w-12 object-cover rounded"
            />
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>
          <button
            className="text-red-500 hover:text-red-700 focus:outline-none"
            onClick={() => deleteFromCart(item.id)}
          >
            Delete
          </button>
        </div>
        )
      })
    :
    ""
    }
    {
      cartItems ?.length > 0 ?
      <>
      <p className="text-gray font-semibold">
        $ {cartItems&&cartItems?.flat()?.reduce((a, b) => a + b ?.price,0)}
      </p>
      <Link to="/checkout">
      <button className="bg-red-500 text-white px-4 py-2 m-2 rounded-md">
        Checkout
      </button>
      </Link>
      </>
      :
      ""
    }
    </>


  )
}

export default Cart
