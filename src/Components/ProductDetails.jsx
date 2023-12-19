import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { UseCountState } from '../StateManagement/Context'

const ProductDetails = () => {
    const [products, setProducts] = useState([])
    const {cartItems, setCartItems} = UseCountState()
    const {cartCount, setCartCount}=UseCountState()
    useEffect(() => {
        axios.get('Products.json')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
    }, [])
    const handleAddToCart=(id)=>{
      cartItems.push(products.filter((ele)=>ele?.id==id))
    }
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {products &&
    products.map((product) => (
      <div key={product?.id} className="bg-white p-4 shadow-md rounded-md">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-40 object-cover mb-4"
        />
        <h4 className="text-lg font-semibold mb-2">{product?.title}</h4>
        <div className="grid grid-cols-2 items-center gap-4">
          <button onClick={()=>{setCartCount(cartCount+1);handleAddToCart(product?.id)}}className="bg-red-500 text-white px-4 py-2 rounded-md">
            ADD to cart
          </button>
          <h4 className="text-gray-800">&#8377; {product?.price}</h4>
        </div>
      </div>
    ))}
</div>

  )
}

export default ProductDetails
