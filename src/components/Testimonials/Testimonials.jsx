import React from "react";
import "./testimonials.css";
import reviewImage from "../../assets/Review.png";
const Testimonials = () => {
  const Reviews = ({ imgURL, review, reviewer, founder }) => (
    <div class="testimonials_content">
      <div class="testimonials-reviews">
        <img src={imgURL} alt="review" />
      </div>
      <div class="testimonials-p">
        <p>{review}</p>
      </div>
      <div class="testimonials-reviewer">
        <p>{reviewer}</p>
      </div>
      <div class="testimonials-founder">
        <p>{founder}</p>
      </div>
    </div>
  );
  return (
    <div>
      <div className="head" id="clients">
        <div className="head__subheading">
          <p>Testimonials</p>
        </div>
        <div className="head__heading">
          <h2>What our trusted client say </h2>
        </div>
        <div className="head__p">
          <p>
            Community development is often linked with community work or
            community planning, and may involve stakeholders, foundations,
          </p>
        </div>
      </div>
      <div className="testimonials_container">
        <div>
          <Reviews
            imgURL={reviewImage}
            review="“And residence for met the estimable disposing. Mean if he they been no hold mr.”"
            reviewer="Sabo Masties"
            founder="Founder at Rolex"
          />
        </div>
        <div>
          <Reviews
            imgURL={reviewImage}
            review="“I could not be more thrilled that I ended up deciding on Circle to
            become the home of the Lightbulb Moment community.”"
            reviewer="John Marko"
            founder="Founder at Migelko"
          />
        </div>
        <div>
          <Reviews
            imgURL={reviewImage}
            review="“Yet preference connection unpleasant yet melancholy but end appearance.”"
            reviewer="Chris Evans"
            founder="Founder at Google"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
