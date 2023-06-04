import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AuthContext from "../../Store/AuthContext/auth-context";

const RootLayout = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate()

  const cartEnableHandler = () => {
    navigate('/cart')
  };

  return (
    <>
      <NavBar onCartClick={cartEnableHandler} />
      <Outlet />
      {authCtx.loggedIn && <Footer />}
    </>
  );
};

export default RootLayout;
