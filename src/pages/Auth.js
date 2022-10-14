import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

import '../components/Auth.css'
import { useSelector } from "react-redux";


 
const Auth = () => {
  const [activePage, setActivePage] = useState("register");
  const {registered} =useSelector((state)=>state.user)
  //  Functions to handle Tab Switching
  const handleLogin = () => {
    // update the state to tab1
    setActivePage("login");
  };
  const handleRegister = () => {
    // update the state to review
    setActivePage("register");
  };
  if(registered) return <Login />;
  return (
    <div className="login__Div">
    <div className="container">
        {activePage === "register" ? <Register />:<Login/>}
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