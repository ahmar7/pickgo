import React from "react";
import {
  Bell,
  Chivron,
  Download,
  Heart,
  LocationIco,
  Logo,
  Shop,
} from "../../utils/allImg";
import "./Header.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const Header = () => {
  const options = [
    "Rancho Cordoca, CA",
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 4",
  ];
  const options2 = [
    "Categories",
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
  ];
  const options3 = ["My Stuff", "Option 1", "Option 2", "Option 3", "Option 4"];
  const defaultOption = options[0];
  const defaultOption2 = options2[0];
  const defaultOption3 = options3[0];
  return (
    <div className="main-container">
      <div className="container-width navbar">
        <div className="logo no-left-margin inner-flex">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-input inner-flex">
          <div className="loc-wrap">
            <img src={LocationIco} className="location-ico" alt="" />
            <Dropdown
              className="location-select"
              options={options}
              value={defaultOption}
              placeholder="Select an option"
            />
            <img className="nav-drop" src={Chivron} alt="" />
          </div>
          <div className="select-wrap">
            <Dropdown
              className="category-select"
              options={options2}
              value={defaultOption2}
              placeholder="Select an option"
            />
            <img className="nav-drop" src={Chivron} alt="" />
          </div>
          <div className="select-wrap">
            <Dropdown
              className="stuff-select"
              options={options3}
              value={defaultOption3}
              placeholder="Select an option"
            />
            <img className="nav-drop" src={Chivron} alt="" />
          </div>
        </div>
        <div className="nav-icons">
          <div className="flex-ico">
            <img src={Bell} alt="" />
          </div>
          <div className="flex-ico">
            <img src={Heart} alt="" />
          </div>
          <div className="flex-ico">
            <img src={Shop} alt="" />
          </div>
        </div>
        <div className="nav-btn">
          <button>
            <img src={Download} alt="" />
            Get the app
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
