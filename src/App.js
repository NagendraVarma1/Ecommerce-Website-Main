import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartContext/CartProvider";
import About from "./Components/About/About";

const router = createBrowserRouter([
  {path: '/', element: <ProductList />},
  {path: '/about', element: <About />}
])

const App = () => {

  const [cartEnable, setCartEnable] = useState(false)


  const cartEnableHandler = () => {
    setCartEnable(true)
  }

  const cartCloseHandler = () => {
    setCartEnable(false)
  }

  return (
    <CartProvider>
      {cartEnable && <Cart onCloseClick={cartCloseHandler}/>}
      <NavBar onCartClick={cartEnableHandler} />
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </CartProvider>
  );
};

export default App;
