import React from "react";
import { NavLink } from "react-router-dom";
import { Chivron, ChivronBlack, Logo } from "../../utils/allImg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./SignIn.css";
const SignIn = () => {
  const options = ["US +1", "CA +1", "UK +44", "UA +380", "UA +380"];
  const defaultOption = options[0];

  return (
    <div className="main-signIn">
      <div className="sign-phone-form">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <div className="main-form">
          <h1 className="sign-heading">Sign In </h1>
          <form className="sign-inputs">
            <input
              required
              type="email"
              className="form-field"
              placeholder="Your Email"
              id=""
            />
            <input
              required
              type="password"
              className="form-field"
              placeholder="Your Password"
              id=""
            />
            <div className="sign-btn">
              <NavLink to="/gifts">
                <button>Continue</button>
              </NavLink>
            </div>
            <div className="sign-btn alter-btn">
              <NavLink to="/SignInWithOtp">
                <button>Login with OTP instead</button>
              </NavLink>
            </div>
          </form>
          <div className="form-divider">
            <span className="divider-line"></span>
            <span className="divider-text">OR</span>
            <span className="divider-line"></span>
          </div>
          <h1 className="sign-heading">Sign Up </h1>
          <form className="sign-inputs">
            <div className="phone-input">
              <div className="select-wrap">
                <Dropdown
                  className="category-select"
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
                <img className="nav-drop" src={ChivronBlack} alt="" />
              </div>
              <input
                required
                type="text"
                className="phone"
                placeholder="Phone Number is Required"
              />
            </div>
            <input
              required
              type="email"
              className="form-field"
              placeholder="Your Email"
              id=""
            />
            <input
              required
              type="password"
              className="form-field"
              placeholder="Your Password"
              id=""
            />
            <input
              required
              type="text"
              className="form-field"
              placeholder="Your Name"
              id=""
            />
            <NavLink to="/gifts">
              <div className="sign-btn">
                <button>Sign Up</button>
              </div>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
