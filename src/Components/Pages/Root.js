import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";
import CartProvider from "../../Store/CartContext/CartProvider";
import Footer from "../Footer/Footer";
import AuthContext from "../../Store/AuthContext/auth-context";

const RootLayout = () => {
  const authCtx = useContext(AuthContext);

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
      {authCtx.loggedIn && <Footer />}
    </CartProvider>
  );
};

export default RootLayout;