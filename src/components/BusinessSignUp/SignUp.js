import React from "react";
import { NavLink } from "react-router-dom";
import {
  Chivron,
  ChivronBlack,
  Get1,
  Get2,
  Get3,
  Logo,
} from "../../utils/allImg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./SignUp.css";
const SignUp = () => {
  const options = [
    "Restaurant Cuisines",
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
  ];
  const defaultOption = options[0];

  return (
    <>
      <div className="main-signIn main-business">
        <div className="sign-phone-form business-form business-left">
          <div className="main-form">
            <h1 className="sign-heading">Sign Up</h1>
            <form className="sign-inputs">
              <div className="label-input">
                <label htmlFor="">Contact Person</label>
                <input
                  required
                  type="text"
                  className="form-field"
                  placeholder="Contact Person Name"
                  id=""
                />
              </div>
              <div className="label-input">
                <label htmlFor="">Company Name</label>
                <input
                  required
                  type="text"
                  className="form-field"
                  placeholder="Company Name"
                  id=""
                />
              </div>
              <div className="label-input">
                <label htmlFor="">Company Type</label>
                <div className="select-wrap">
                  <Dropdown
                    className="category-select"
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                  />
                  <img className="nav-drop" src={Chivron} alt="" />
                </div>
              </div>
              <div className="label-input">
                <label htmlFor="">Email</label>
                <input
                  required
                  type="text"
                  className="form-field"
                  placeholder="sample_email@pickgo.com"
                  id=""
                />
              </div>
              <div className="label-input">
                <label htmlFor="">Create Password</label>
                <input
                  required
                  type="text"
                  className="form-field"
                  placeholder="Your Password"
                  id=""
                />
              </div>
              <div>
                <p className="otp-text privacy">
                  By clicking below, I agree to the{" "}
                  <a href="" className="green">
                    Terms of Use
                  </a>{" "}
                  and that I have read the{" "}
                  <a href="" className="green">
                    {" "}
                    Privacy Statment
                  </a>
                  .
                </p>
              </div>
              <div className="sign-btn bs-btn">
                <button>Sign Up</button>
              </div>
            </form>
            <div className="exist-account">
              <NavLink to="/SignInWithPhone">Already Have an Account?</NavLink>
            </div>
          </div>
        </div>
        <div className="sign-phone-form business-form business-right">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <h1 className="get-busniness">Get Started Today!</h1>
          <p className="get-desc">It’s free to bring in new customers.</p>
          <div className="start-box">
            <div className="indiv-start">
              <img src={Get1} className="abs-start " alt="" />
              <h3 className="abs-head">Bring You New Customers.</h3>
              <p className="get-text">
                Get more fans & followers, build connections
              </p>
            </div>
            <div className="indiv-start ">
              <img src={Get2} className="abs-start alter-abs" alt="" />
              <h3 className="abs-head">Build Loyalty </h3>

              <p className="get-text">
                Learn what your fans like and don't like to build a deeper
                relationship
              </p>
            </div>
            <div className="indiv-start">
              <img src={Get3} className="abs-start" alt="" />
              <h3 className="abs-head">Make it Destination.</h3>

              <p className="get-text">
                Good customer will support you after they found in love with
                your product
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
