import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";

const App = () => {

  const [cartEnable, setCartEnable] = useState(false)

  const cartEnableHandler = () => {
    setCartEnable(true)
  }

  const cartCloseHandler = () => {
    setCartEnable(false)
  }

  return (
    <>
      {cartEnable && <Cart onCloseClick={cartCloseHandler}/>}
      <NavBar onCartClick={cartEnableHandler}/>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
};

export default App;
