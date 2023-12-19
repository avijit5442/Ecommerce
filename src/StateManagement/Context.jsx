import React, { createContext, useContext, useState } from 'react'
const AppContext=createContext(null)
export const AppProvider=({children})=>{
    const [cartCount, setCartCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    return (
        <AppContext.Provider value={{cartCount,setCartCount,cartItems,setCartItems}}>
             {children}
        </AppContext.Provider>
    )
}
export function UseCountState(){
    return useContext(AppContext)
}
