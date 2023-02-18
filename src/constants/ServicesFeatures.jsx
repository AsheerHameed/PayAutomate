import React from "react";
import './servicesFeature.css'
const ServicesFeatures = ({ img, feature }) => {
  return (
    <div className="services_feature">
      <div>
        <img src={img} alt="img" />
      </div>
      <div className="services_feature-p">
        <p>{feature}</p>
      </div>
    </div>
  );
};

export default ServicesFeatures;
