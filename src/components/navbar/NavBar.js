import React from "react";
import Logo from "../../assets/logo.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="container navbar">
      <div className="top-nav">
        <a href="/" className="nav-logo">
          <img src={Logo} alt="logo" />
        </a>
      </div>

      <div className="top-menu">
        <ul className="menu-bar">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
