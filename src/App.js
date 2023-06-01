import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ProductList from "./Components/ProductList/ProductList";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartContext/CartProvider";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";

const router = createBrowserRouter([
  {path: '/', element: <ProductList />},
  {path: '/about', element: <About />},
  {path: '/home', element: <Home /> },
  {path: '/contactUs', element: <Contact />}
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
      <RouterProvider router={router} />
      <Footer />
    </CartProvider>
  );
};

export default App;
