import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import RootLayout from "./Components/Pages/Root";
import WomenWare from "./Components/Pages/WomenWare";
import KidWare from "./Components/Pages/KidWare";
import Shoes from "./Components/Pages/Shoes";
import ProductDetails from "./Components/Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <ProductList /> },
      {path: '/:name', element: <ProductDetails />},
      { path: "/about", element: <About /> },
      { path: "/home", element: <Home /> },
      { path: "/contactUs", element: <Contact /> },
      {path: '/womenWare', element: <WomenWare />},
      {path: '/womenWare/:name', element: <ProductDetails />},
      {path:'/kidWare', element: <KidWare />},
      {path:'/kidWare/:name', element: <ProductDetails />},
      {path: '/shoes', element: <Shoes />},
      {path: '/shoes/:name', element: <ProductDetails />},
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
