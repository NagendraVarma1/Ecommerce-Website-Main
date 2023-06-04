import React, { useContext } from "react";
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
import Login from "./Components/Pages/Login";
import AuthContext from "./Store/AuthContext/auth-context";
import Store from "./Components/Pages/Store";


const App = () => {
  const authCtx = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: authCtx.loggedIn ? <Store/> : <Login /> },
        { path: "/menWare", element: authCtx.loggedIn ? <ProductList /> : <Login /> },
        { path: "/menWare/:name", element: authCtx.loggedIn ? <ProductDetails /> : <Login /> },
        { path: "/about", element: <About /> },
        { path: "/home", element: <Home /> },
        { path: "/contactUs", element: authCtx.loggedIn ? <Contact /> : <Login /> },
        { path: "/womenWare", element: authCtx.loggedIn ? <WomenWare /> : <Login /> },
        { path: "/womenWare/:name", element: authCtx.loggedIn ? <ProductDetails /> : <Login /> },
        { path: "/kidWare", element: authCtx.loggedIn ? <KidWare /> : <Login /> },
        { path: "/kidWare/:name", element: authCtx.loggedIn ? <ProductDetails /> : <Login /> },
        { path: "/shoes", element: authCtx.loggedIn ? <Shoes /> : <Login /> },
        { path: "/shoes/:name", element: authCtx.loggedIn ? <ProductDetails /> : <Login /> },
        { path: "/login", element: <Login />}
      ],
    },
  ]);
  
  return <RouterProvider router={router} />;
};

export default App;
