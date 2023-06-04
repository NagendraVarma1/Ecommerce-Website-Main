// import React, { useState } from "react";
// import CartContext from "./cart-context";

// const CartProvider = (props) => {
//   const [cartItems, setCartItems] = useState([]);

//   const email = localStorage.getItem('email');
//   if(email) {
//     const updatedEmail = email.replace('@', '').replace('.', '');
//   }
  

//   const addCartItemsHandler = (item) => {
//     const cartItemIndex = cartItems.findIndex(
//       (cartItem) => cartItem.title === item.title
//     );
//     const existingCartItem = cartItems[cartItemIndex];

//     let updatedCartItems;

//     if (existingCartItem) {
//         const updatedCartItem = {
//             ...existingCartItem,
//             quantity: Number(existingCartItem.quantity) + 1
//         }
//         updatedCartItems = [...cartItems];
//         updatedCartItems[cartItemIndex] = updatedCartItem;
//         setCartItems(updatedCartItems)
//     } 
    
//     else {

//         const updatedItem = {...item,quantity: 1}
//       setCartItems((prevState) => {
//         return [...prevState, updatedItem];
//       });
//     }
//   };

//   const removeCartItemsHandler = (item) => {
//     let newUpdatedCart = cartItems.filter(
//       (cartItem) => cartItem.title !== item.title
//     );
//     setCartItems(newUpdatedCart);
//   };

//   const cartContext = {
//     cartItems: cartItems,
//     addCartItems: addCartItemsHandler,
//     removeCartItems: removeCartItemsHandler,
//   };
//   return (
//     <CartContext.Provider value={cartContext}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
