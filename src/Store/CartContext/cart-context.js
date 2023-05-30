import React from "react"

const CartContext = React.createContext({
    cartItems: [],
    addCartItems: () => {},
    removeCartItems: () => {}
})

export default CartContext;