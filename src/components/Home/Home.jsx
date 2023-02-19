import React from "react";
import "./home.css";
import {
  card4,
  card3,
  card2,
  card1,
  play,
} from "./imports";
const Home = () => {
  return (
    <div className="home__container section__padding ">
  
      <div className="home_left_side">
        <div className="home_left_side__container">
          <div className="home_left_side__p">
            <p>Smart Payments</p>
          </div>
          <div className="home_left_side__head">
            <h1>
              The Next Generation Payment  {" "}
              <span style={{ color: "var(--primary-color",border:"1px solid #fff" }}>Method</span>
            </h1>
            <p>
              Yet preference connection unpleasant yet melancholy but end
              appearance. And excellence partiality estimating terminated day
              everything.
            </p>
          </div>
          <div className="home_left_side__cta">
            <button className="home_left_side__cta__get-started">
              Get started
            </button>
            <button className="home_left_side__cta__watch-video">
              Watch video
            </button>
          </div>
        </div>
      </div>

      <div className="home_right_side">
        <div className="right_side_photos">
          <div className="photo">
            <img src={card1} alt="card1" />
          </div>
          <div className="photo">
            <img src={card2} alt="card2" />
          </div>
        </div>

        <div className="right_side_photos">
          <div className="photo">
            <img src={card3} alt="card3" />
          </div>
          <div className="photo">
            <img src={card4} alt="card4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
