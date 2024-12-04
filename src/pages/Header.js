import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";
import "./styles/header.css";

const Header = () => {
  return (
    <header className="text-white py-3 header-container">
      <div className="container ">
        <h1 className="text-white">Fashion Store</h1>
        <nav className="dropdown container">
          <div className="dropdown">
            <button className="dropdown-button">
              Menu
            </button>
            <div className="dropdown-content">
              <Link to="/" className="dropdown-link">Home</Link>
              <Link to="/about" className="dropdown-link">About</Link>
              <Link to="/contact" className="dropdown-link">Contact</Link>
              <Link to="/table" className="dropdown-link">Table</Link>
              <Link to="/form" className="dropdown-link">NewForm</Link>
              <Link to="/chart" className="dropdown-link">Chart</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
