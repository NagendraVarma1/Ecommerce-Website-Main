import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartContext/CartProvider";

const App = () => {

  const [cartEnable, setCartEnable] = useState(false)
  const [cartItemQuantity, setCartItemQuantity] = useState(0)

  const cartEnableHandler = () => {
    setCartEnable(true)
  }

  const cartCloseHandler = () => {
    setCartEnable(false)
  }

  
  const totalQuantityHandler = () => {
    setCartItemQuantity(cartItemQuantity + 1)
  }
  
  return (
    <CartProvider>
      {cartEnable && <Cart onCloseClick={cartCloseHandler}/>}
      <NavBar onCartClick={cartEnableHandler} quantity={cartItemQuantity}/>
      <Header />
      <ProductList getQuantity={totalQuantityHandler}/>
      <Footer />
    </CartProvider>
  );
};

export default App;
