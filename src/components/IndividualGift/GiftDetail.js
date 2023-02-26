import React, { useState } from "react";
import { Chivron, Gift1, Qr, RuleDesk } from "../../utils/allImg";
import "./GiftDetail.css";

const GiftDetail = () => {
  const [content, setContent] = useState(false);
  let toggleContent = () => {
    if (content === false) {
      setContent(true);
    } else {
      setContent(false);
    }
  };
  return (
    <div className="main-detail ">
      <div className="container-width">
        <div className="detail-flex">
          <div className="side-detail side-gift ">
            <div className="indiv-gift ">
              <div className="gift-img">
                <img src={Gift1} alt="" />
                <div className="value-highlight">$25 Gift</div>
              </div>
              <h3 className="gift-title">Aroy Thai Express</h3>
              <h4 className="gift-subtitle">11009 Olson Drive</h4>
              <div className="gift-shadow">Use by March 15</div>
            </div>
          </div>
          <div className="center-detail">
            <div className="gap-desc">
              <h3>Ton Saephan</h3>
              <p>Use by Mar. 15 2023</p>
            </div>
            <p className="green left-te">$25</p>
            <div className="sign-btn mt">
              <button>Use This Gift</button>
            </div>
            <div className="form-divider">
              <span className="divider-line"></span>
              <span className="divider-text">Or Scan QR</span>
              <span className="divider-line"></span>
            </div>
            <div className="qr-code">
              <img src={Qr} alt="" />
              <div className="qr-text">
                <p className="qr-desc">Show QR code to cashier</p>
                <p className="qr-desc">Phone # 206-495-5555</p>
                <p className="qr-desc bold">Don’t have app?</p>
                <p className="green qr-desc">Download It Now</p>
              </div>
            </div>
          </div>
          <div className="side-detail side-rule">
            <div className="rules">
              <div className="rule-heading" onClick={toggleContent}>
                <h1 className="restriction">
                  <img src={RuleDesk} alt="" />
                  Rules and Restrictions
                </h1>
                <div className={content ? "chiv rotate-it" : "chiv"}>
                  <img src={Chivron} alt="" />
                </div>
              </div>
              <div
                className={
                  content ? "content-toggle show-content" : "content-toggle"
                }
              >
                <p>
                  Eat well Save Time. Feel amazing. Enjoy fully prepared,
                  delicious meals that are designed by nutritionists & delivered
                  straight to your door. Give Thistle a try - and enjoy a tasty,
                  worry-free, healthy future.
                </p>
                <p>
                  Valid for first-time customers only. Valid for $125 over 5
                  weeks. $25 gift/week. Gift auto-applied when using the unique
                  link.
                </p>
                <p>
                  <div className="bold"> Gifts are...</div> • Non-transferable{" "}
                  <br />• For use by named gift recipient only <br />• Not valid
                  for cash
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftDetail;
