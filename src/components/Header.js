import React from "react";
import "./comCSS/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <div className="logo_img">
              <Link to="/">
                <img src="./ecommerce.png" className="img" alt="" />
              </Link>
            </div>
            <div className="name">
              <h4>Store</h4>
            </div>
          </div>
          <div className="navigation">
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Products</Link>
              </li>
            </ul>
          </div>
          <div className="users">
            <ul className="users-list">
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/">Sign In</Link>
              </li>
              <li>
                <Link to="/">
                  <img
                    src="./kunal_logo.jpg"
                    className="users-img users-img-li"
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
