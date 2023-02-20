import React from 'react'
import './testimonials.css'
 const Reviews = ({ img, review, reviewer, founder }) => (
   <div className="testimonials__container section__padding">
     <div className="testimonials_content">
       <div className="testimonials-reviews">
         <img src={img} alt="review" />
       </div>
       <div className="testimonials-p">
         <p>{review}</p>
       </div>
       <div className="testimonials-reviewer">
         <p>{reviewer}</p>
       </div>
       <div className="testimonials-founder">
         <p>{founder}</p>
       </div>
     </div>
   </div>
 );

export default Reviews
