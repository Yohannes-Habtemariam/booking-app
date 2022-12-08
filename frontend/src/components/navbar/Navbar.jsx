import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav-container">
        <h2 className="logo">Hotel Booking with LisaConsult </h2>
        <div className="regiter-login-container">
          <NavLink className="nab-register-login"> Register </NavLink>
          <NavLink className="nab-register-login"> Login </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
