import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo}></img>
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menü</Link>
        <Link to="/about">Hakkımızda</Link>
        <Link to="/contact">İletişim</Link>
      </div>
    </div>
  );
};

export default Navbar;
