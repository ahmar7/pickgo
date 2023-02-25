import React from "react";
import { NavLink } from "react-router-dom";
import { DetailGift } from "../../Data/DetailGift";
const GiftsCards = () => {
  return (
    <div className="main-gift">
      <div className="">
        <div className="container-width">
          <hr className="gift-hr" />
          <div className="gift-blocks gift-page">
            {DetailGift.map((item, key) => (
              <NavLink to={item.href} key={key} className="indiv-gift ">
                <div className="gift-img">
                  <img src={item.img} alt="" />
                  <div className="value-highlight">{item.value} Gift</div>
                </div>
                <h3 className="gift-title">{item.title}</h3>
                <h4 className="gift-subtitle">{item.subtitle}</h4>
                <div className="gift-shadow">{item.expiry}</div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsCards;
