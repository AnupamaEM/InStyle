import React from "react";
import { Link } from "react-router-dom"; 
import "./styles/style.css";
import "./styles/header.css";

const Header = () => {
  return (
    <header className=" text-white py-3">
      <div className="container text-center">
        <h1 className="text-white">Fashion Store</h1>
        <nav>
          <ul className="nav flex-column">

            <li className="nav-item mb-3">
              <Link to="/" className="nav-link text-white ">Home</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/about" className="nav-link text-white ">About</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/contact" className="nav-link text-white ">Contact</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/table" className="nav-link text-white ">Table</Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
