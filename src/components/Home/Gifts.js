import React from "react";
import { Gift1 } from "../../utils/allImg";
import "./Gifts.css";
import { HomeGifts } from "../../Data/HomeGifts";
import { NavLink } from "react-router-dom";
const Gifts = () => {
  return (
    <div className="gift-main">
      <div className="container-width">
        <h1 className="gift-heading">
          Business who also offering you gift to <br /> visit their business
        </h1>
        <div className="gift-blocks">
          {HomeGifts.map((item, key) => (
            <NavLink to={item.href} key={key} className="indiv-gift">
              <div className="gift-img">
                <img src={item.img} alt="" />
                <div className="value-highlight">{item.value} Gift</div>
              </div>
              <h3 className="gift-title">{item.title}</h3>
              <h4 className="gift-subtitle">{item.subtitle}</h4>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gifts;
