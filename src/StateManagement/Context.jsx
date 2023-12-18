import React, { createContext, useContext, useState } from 'react'
const AppContext=createContext(null) 
export const AppProvider=({children})=>{
    const [cartCount, setCartCount] = useState(0)
    return (
        <AppContext.Provider value={{cartCount,setCartCount}}>
             {children}
        </AppContext.Provider>
    )
}
export function UseCountState(){
    return useContext(AppContext)
}
