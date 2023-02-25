import React from "react";
import GiftDetail from "../components/IndividualGift/GiftDetail";
import GiftsCards from "../components/IndividualGift/Gifts";
import Header from "../layout/Header/Header";

const GiftDetails = () => {
  return (
    <div>
      <Header />
      <GiftDetail />
      <GiftsCards />
    </div>
  );
};

export default GiftDetails;
