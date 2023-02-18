import React from "react";
import "./features.css";
import "../../constants/ConstantComponent";
import featuresCard from "../../assets/featureCards.png";
import featuresArrow from "../../assets/featuresArrow.png";
import ConstantComponent from "../../constants/ConstantComponent";
const Features = () => {
  return (
    <div className="features__container section__padding">
      <div className="features_left_side">
        <div>
          <ConstantComponent
            subheading="Features"
            heading="You Do the Business, We’ll Handle the Money."
            p="Multiple listening columns help you stay tuned to everything that's relevant. Respond in real-time and engage with your audience as often as you like."
          />
        </div>
        <div className="features_left_side_footer">
          <p>
            Learn more about monitoring
          </p>
          <img src={featuresArrow} alt="arrow" />
        </div>
      </div>
      <div className="features_right_side">
        <div className="features_right_side_image">
          <img src={featuresCard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
