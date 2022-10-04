import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

import '../components/Auth.css'

 
const Auth = () => {
  const [activePage, setActivePage] = useState("login");
  //  Functions to handle Tab Switching
  const handleLogin = () => {
    // update the state to tab1
    setActivePage("login");
  };
  const handleRegister = () => {
    // update the state to review
    setActivePage("register");
  };
  return (
    <div className="login__Div">
    <div className="container">
        {activePage === "login" ? <Login /> : <Register />}
        <ul className="login_tab nav ">
        <li 
          className={activePage === "login" ? "active " : " "}
          onClick={handleLogin}
        >
          Login
        </li>
        <li
          className={activePage === "register" ? "active " : " "}
          onClick={handleRegister}
        >
          Register
        </li>
      </ul>
    </div>
    </div>
  );
};
export default Auth;