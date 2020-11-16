import React from "react";
import "./Footer.css";
import logo from "./Logo.jpeg";

function Footer() {
  return (
    <div className="footer-head" id="footer-head">
      <div className="footer">
        <img className="footer__logo" src={logo} />
        <div className="footer__nav">
          <h3>CONTACT US AT:</h3>
          <h5>
            <ul>+91 8296232121/8296282121</ul>
          </h5>
          <h3>Email Us At</h3>
          <h5>
            <ul>nationalgroupmangalore@gmail.com</ul>
          </h5>
          <h3>REACH US AT:</h3>
          <address>
            <ul> 2nd Floor,Satya Prakash Building,Kulur,</ul>

            <ul>mangaluru-Udupi Highway,Mangalore</ul>
          </address>
        </div>
      </div>
      <p>© 2020 NATIONAL GROUP.copyrights reserved</p>
    </div>
  );
}

export default Footer;
