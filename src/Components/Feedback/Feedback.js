import React, { useState } from "react";
import StarRating from "./StarRating";
import banner from "../../Components/images/busBG.jpg";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  return (
    <div className="feedbackPage">
      <img src={banner} alt="banner" />
      <h2>أضف تقييمك</h2>
      <p>
        أهلا بك عزيزي الزائر, <br />
        نتمي تضيف تقييمك وشكرا لانك فردا منا
      </p>
      <h4>يرجى تقييم تجربة الخدمة الخاصة بك للمعلمات التالية</h4>
      <ul>
        <li>
          <StarRating />
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
