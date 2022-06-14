import React, { useState } from "react";
import StarRating from "./StarRating";
import banner from "../../Components/images/busBG.jpg";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  return (
    <div className="feedbackPage">
      <img src={banner} alt="banner" />
      <h2>Feedback</h2>
      <p>
        Dear Customer, <br />
        Thank you for getting the services. We would like to know how we
        performed. Please spare some moments to give us your valuable feedback
        as it will help us in improving our service.
      </p>
      <h4>Please rate your service experience for the following parameters</h4>
      <ul>
        <li>
          <StarRating />
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
