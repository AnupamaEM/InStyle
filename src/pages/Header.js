import React from "react";
import { Link } from "react-router-dom"; 
import "./style.css";

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container text-center">
        <h1 className="text-white">Fashion Store</h1>
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <Link to="/home" className="nav-link text-white ">Home</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/about" className="nav-link text-white ">About</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/contact" className="nav-link text-white ">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
