import React from "react";
import "./constant.css";
const ConstantComponent = ({ subheading, heading, p }) => {
  return (
    <div className="constant__container">
      <div className="constant__subheading">
        <p>{subheading}</p>
      </div>
      <div className="constant__heading">
        <h2>{heading}</h2>
      </div>
      <div className="constant__p">
        <p>{p}</p>
      </div>
    </div>
  );
};

export default ConstantComponent;
