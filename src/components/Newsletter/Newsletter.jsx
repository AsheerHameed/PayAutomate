import React from "react";
import "./newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter__container section__padding flex__center">
      <div className="newsletter__content">
        <div className="newsletter_content-heading">
          <h1>Subscribe to our Newsletter</h1>
        </div>
        <div className="newsletter_content-p flex__center">
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing.
          </p>
        </div>
        <div className="newsletter_cta flex__center">
          <input
            className="newsletter_input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="newsletter_button" type="submit">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
