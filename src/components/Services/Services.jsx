import React from "react";
import ConstantComponent from "../../constants/ConstantComponent";
import { watch, tick, People } from "./imports";
import ServicesFeatures from "../../constants/ServicesFeatures";
import "./services.css";

const Services = () => {
  return (
    <div className="services__container section__padding">
      <div className="services_left_side">
        <img className="services_people" src={People} alt="people" />
        <div className="services__watch-video">
          <img src={watch} alt="watch" />
        </div>
      </div>
      <div className="services_right_side">
        <div>
          <ConstantComponent
            subheading="services"
            heading="Easily Control your Billing and Invoicing."
            p="Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her."
          />
        </div>
        <div className="services_right_side-footer">
          <div>
            <div className="services_right_side-footer-row1">
              <ServicesFeatures img={tick} feature="Concept Design" />
            </div>
            <div>
              <ServicesFeatures img={tick} feature="Concept Development" />
            </div>
          </div>
          <div>
            <div className="services_right_side-footer-row2">
              <ServicesFeatures img={tick} feature="Concept Implementation" />
            </div>
            <div>
              <ServicesFeatures img={tick} feature="Testing work" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
