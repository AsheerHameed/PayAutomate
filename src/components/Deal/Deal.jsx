import React from "react";
import DealImage from "../../assets/DealImage.png";
import "./deal.css";
const Deal = () => {
  return (
    <div className="deal__container section__padding">
      <div className="deal_container-left_side slide-fwd-center">
        <div>
          <div className="deal_content">
            <h2>Find a Better card Deal in few Easy Steps.</h2>
          </div>
          <div className="deal_content-lists">
            <ul>
              <h3>
                <li>For Innovation team</li>
              </h3>
            </ul>
            <p className="deal_content-p">
              After brainstorming about insights, get the power to create
              something real. Bring your ideas to life and share your vision
              with concrete elements.
            </p>
          </div>
          <div className="deal_content-lists">
            <ul>
              <h3>
                <li>For Consultancies</li>
              </h3>
            </ul>
            <p className="deal_content-p">
              Make collaboration and communication easier with your team or your
              client. With one tool, you can work together and keep everyone on
              the same page.
            </p>
          </div>
        </div>
      </div>
      <div className="deal_container-right_side slide-fwd-center">
        <img src={DealImage} alt="Deal Image" />
      </div>
    </div>
  );
};

export default Deal;
