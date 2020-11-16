import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import logo from "./Logo.jpeg";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />

      <div className="header__nav">
        <div className="header__option">
          <Link to="vision">
            <span className="header__OptionLineOne">ABOUT US</span>
          </Link>
        </div>
        <div className="header__option">
          <Link to="nav__heading__light">
            <span className="header__OptionLineOne">SERVICES</span>
          </Link>
        </div>
        {/* <div className="header__option">
          <Link to="clients">
            <span className="header__OptionLineOne">CLIENTS</span>
          </Link>
        </div> */}
        <div className="header__option">
          <Link to="footer-head">
            <span className="header__OptionLineOne">CONTACT US </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
