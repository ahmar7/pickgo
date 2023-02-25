import React from "react";
import {
  BackgroundShape,
  Bg1,
  Satisfy,
  Fans,
  Awk,
  Sat,
  Offset,
} from "../../utils/allImg";
import "./BusinessDetail.css";
const BusinessDetail = () => {
  return (
    <div className="business-detail container-width-2">
      <div className="business-flex">
        <div className="left-buse">
          <img src={Awk} className="wm-img" alt="" />
        </div>
        <div className="right-buse">
          <h1>Business acquire new customers?</h1>
          <span className="border-divider"></span>
          <p className="buse-text">
            No matter what marketing platform you use but ended up cost you but
            no return:{" "}
            <span className="bold">
              you pay for ads, commission fees, hug discount deal
            </span>{" "}
            to get customers attention even if someone tell you that $0 upfront
            cost but then you still pay over{" "}
            <span className="bold">30-40% in commission</span> , and{" "}
            <span className="bold">80-90% deal</span> to customers and you got
            some cheap customer only come when they have offer but never show up
            without an offer. If you send out voucher $1 or $2 or $5 not enough
            attention to invite them to your door.
          </p>
        </div>
      </div>
      <div className="container-width-2">
        <div className="right-buse happy-text for-mbl  ">
          <h1>Let’s do it Together</h1>
          <span className="border-divider"></span>
          <p className="buse-text">
            We send out <span className="green">$10-50 gift</span> (on us)
            inviting new customers to your door and try your business, you build
            loyalty with them to make it destination.
          </p>
          <p className="buse-text">
            All you have to do is just up account to start accepting our
            customer who ready to walking to your door.
          </p>
        </div>
      </div>
      <div className="customer-happy">
        <div className="hap">
          <img src={Sat} className="client-satisfy" alt="" />
        </div>
        <img src={BackgroundShape} alt="" />
        <div className="right-buse happy-text for-desk">
          <h1>Let’s do it Together</h1>
          <span className="border-divider"></span>
          <p className="buse-text">
            We send out <span className="green">$10-50 gift</span> (on us)
            inviting new customers to your door and try your business, you build
            loyalty with them to make it destination.
          </p>
          <p className="buse-text">
            All you have to do is just up account to start accepting our
            customer who ready to walking to your door.
          </p>
        </div>
      </div>
      <div className="business-flex no-margin">
        <div className="left-buse">
          <img src={Fans} className="wm-img" alt="" />
        </div>
        <div className="right-buse">
          <h1>Business acquire new customers?</h1>
          <span className="border-divider"></span>
          <p className="buse-text">
            When you have something for them to try like new receipes, new
            products, simple post as soon as you hit launch button we will
            deliver your message to your fans who follow you or even{" "}
            <span className="bold">more new customers</span> come and try with
            their gift.
          </p>
          <p className="buse-text">
            <span className="bold">
              Sign up now to gain as many followers as possible,
            </span>
            build closer relationship with new customers and existing customers
          </p>
          <button className="signup-green">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
