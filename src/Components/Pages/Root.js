import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";
import CartProvider from "../../Store/CartContext/CartProvider";
import Footer from "../Footer/Footer";

const RootLayout = () => {
  const [cartEnable, setCartEnable] = useState(false);

  const cartEnableHandler = () => {
    setCartEnable(true);
  };

  const cartCloseHandler = () => {
    setCartEnable(false);
  };
  return (
    <CartProvider>
      {cartEnable && <Cart onCloseClick={cartCloseHandler} />}
      <NavBar onCartClick={cartEnableHandler} />
      <Outlet />
      <Footer />
    </CartProvider>
  );
};

export default RootLayout;
