import React from "react";
import {
  Download,
  ExportIco,
  GetupIco,
  GreatIco,
  Mobile,
  WDownload,
} from "../../utils/allImg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="main-banner">
      <div className="container-width banner-flex">
        <div className="white-bx">
          <div className="innerbx-flex">
            <div className="img-relative">
              <div className="bx-mbl">
                <img src={Mobile} alt="" />
                <div className="top-head">wow</div>
                <p>$25</p>
                <div className="inner-head">
                  GIFT
                  <span className="inner-blk">for you</span>
                </div>
                <div className="quote-bx">
                  <div>
                    Discover Your <br /> Next{" "}
                    <span className="bold">Favorite </span>
                    <br />
                    <span className="bold"> Business</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bx-content right-float">
              <ul className="bx-ul">
                <li>No review or feedback require</li>
                <li className="center-li">
                  Choose a business to visit:
                  <div className="lighter">
                    restaurant, bar, hair salon, flower & more
                  </div>
                </li>
                <li>What will you try with your gift?</li>
              </ul>
              <div className="bx-btn">
                <button>
                  <img src={WDownload} alt="" /> Try the app
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="white-bx">
          <div className="bx-flex">
            <div className="single-bx">
              <div className="bx-ico">
                <img src={ExportIco} alt="" />
              </div>
              <p className="bx-row">
                Offer to limited number of users & run out fast. Take it if you
                see offer.
              </p>
            </div>
            <div className="single-bx">
              <div className="bx-ico">
                <img src={GreatIco} alt="" />
              </div>
              <p className="bx-row">
                Be a great customer. Make a purchase, and if you’re happy, go
                back.
              </p>
            </div>
            <div className="single-bx">
              <div className="bx-ico">
                <img src={GetupIco} alt="" />
              </div>
              <p className="bx-row">
                Great customer get up to $50 to try new businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
