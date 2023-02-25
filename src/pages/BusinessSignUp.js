import React from "react";
import BusinessDetail from "../components/BusinessSignUp/BusinessDetail";
import SignUp from "../components/BusinessSignUp/SignUp";

const BusinessSignUp = () => {
  return (
    <div className="cls">
      <SignUp />
      <BusinessDetail />
    </div>
  );
};

export default BusinessSignUp;
