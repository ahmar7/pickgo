import React from "react";
import { Step1, Step2, Step3 } from "../../utils/allImg";
import "./HowItWorks.css";
const HowItWorks = () => {
  return (
    <div className="how-main  ">
      <div className="container-width how-bg">
        <h1 className="work-heading">How does it work?</h1>
        <div className="how-boxes">
          <div className="indiv-how">
            <div className="step-mark">
              <img src={Step1} alt="" />
            </div>
            <p>Choose a new business to follow</p>
          </div>
          <div className="indiv-how">
            <div className="step-mark">
              <img src={Step2} alt="" />
            </div>
            <p>Receive your gift through SMS</p>
          </div>
          <div className="indiv-how">
            <div className="step-mark">
              <img src={Step3} alt="" />
            </div>
            <p>Use your gift & enjoy!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
