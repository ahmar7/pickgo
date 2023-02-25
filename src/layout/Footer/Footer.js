import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="main-footer">
      <hr />
      <div className="footer-flex container-width">
        <ul className="footer-ul">
          <a href="" className="footer-link">
            <li>About Us</li>
          </a>
          <a href="" className="footer-link">
            <li>Terms and Policy</li>
          </a>
          <NavLink to="/BusinessSignUp" className="footer-link">
            <li>Business Sign Up</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
