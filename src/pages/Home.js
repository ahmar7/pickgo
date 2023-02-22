import React from "react";
import Banner from "../components/Home/Banner";
import Gifts from "../components/Home/Gifts";
import HowItWorks from "../components/Home/HowItWorks";
import Header from "../layout/Header/Header";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <Gifts />
      <HowItWorks />
    </div>
  );
};

export default Home;
