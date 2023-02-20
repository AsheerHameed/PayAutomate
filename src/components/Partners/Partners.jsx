import React from "react";
import "./partners.css";
import { logo1, logo2, logo3, logo4, logo5 } from "./imports";
const Partners = () => {
  return (
    <div className="partners_container section__padding">
      <div className="partners_images_gallery flex__center">
        <div>
          <img src={logo1} alt="logo1" />
        </div>
        <div>
          <img src={logo2} alt="logo1" />
        </div>
        <div>
          <img src={logo3} alt="logo1" />
        </div>
        <div>
          <img src={logo4} alt="logo1" />
        </div>
        <div>
          <img src={logo5} alt="logo1" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
