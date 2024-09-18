import "../styling/Header.css";
import Logo from "../assets/react.svg";
import React from "react";


function Header() {
    return (
      <nav className="navbar">
        <a href="index.html">
          <img src={Logo} />;
        </a>
        <div>
          <ul id = "navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">About</a></li>
            <li><a href="index.html">These Go Nowhere</a></li>

          </ul>
        </div>
      </nav>
    );
  }
export default Header;