import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken);

    let userLoggedIn = !!token;

    const logInHandler = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }

    const logOutHandler = () => {
        setToken(null);
        localStorage.removeItem('token')
    }

    const authContext = {
        token: token,
        loggedIn: userLoggedIn,
        logIn: logInHandler,
        logOut: logOutHandler,
    }
  return (
    <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
