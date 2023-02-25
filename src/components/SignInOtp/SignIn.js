import React from "react";
import { NavLink } from "react-router-dom";
import { BackBtn, Chivron, ChivronBlack, Logo } from "../../utils/allImg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./SignIn.css";
const SignIn = () => {
  const options = ["US +1", "CA +1", "UK +44", "UA +380", "UA +380"];
  const defaultOption = options[0];

  return (
    <div className="main-signIn main-otp">
      <div className="sign-phone-form otp-form">
        <div className="back-bt">
          <NavLink to="/SignInWithEmail" className="link-back">
            <img src={BackBtn} alt="" /> Go Back
          </NavLink>
        </div>
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <div className="main-form">
          <h1 className="sign-heading">Enter Code</h1>
          <form action="">
            <div className="sign-inputs">
              <div className="phone-input otp-input">
                <input
                  required
                  className="single-numer"
                  maxLength={1}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                <input
                  required
                  className="single-numer"
                  maxLength={1}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                <input
                  required
                  className="single-numer"
                  maxLength={1}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                <input
                  required
                  className="single-numer"
                  maxLength={1}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </div>
              <div>
                <p className="otp-text">
                  A message with a verification code has been sent to your{" "}
                  <br className="desk" /> phone +1 (555) 555-1234. Enter the
                  code to continue.
                </p>
                <a href="" className="que">
                  Didn't get a verification code?
                </a>
              </div>
              <div className="sign-btn">
                <NavLink to="/gifts">
                  <button>Continue</button>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
