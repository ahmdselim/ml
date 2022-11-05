import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeedbacks, getFeedbacks } from "../../redux/actions/actions";
import { FaStar } from "react-icons/fa";
const StarRating = () => {
  const [rating1, setRating1] = useState("");
  const [hover1, setHover1] = useState("");
  const [rating2, setRating2] = useState("");
  const [hover2, setHover2] = useState("");
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [error, setError] = useState([]);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (rating1 === "") {
      setError("تجربتك الشاملة معنا؟");
    } else if (rating2 === "") {
      setError("مواضيع الموقع عن machine learning ؟");
    } else if (name === "") {
      setError("من فضلك أدخل اسمك");
    } else if (suggestion === "") {
      setError("الرجاء كتابة اقتراحاتك");
    } else {
      addFeedbacks(rating1, rating2, name, suggestion, dispatch);
      setError("شكرا لملاحظاتك 😍");
      setRating1(0);
      setRating2(0);
      setName("");
      setSuggestion("");
      getFeedbacks(dispatch);
    }
  };
  return (
    <>
      <div>
        <p>1. تجربتك الشاملة معنا؟</p>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating1(ratingValue)}
              />
              <FaStar
                className="star"
                color={
                  ratingValue <= (hover1 | rating1) ? "#ffc107" : "#e4e5e9"
                }
                size={20}
                onMouseEnter={() => setHover1(ratingValue)}
                onMouseLeave={() => setHover1(null)}
              />
            </label>
          );
        })}
        <p>التقييم: {rating1}</p>
      </div>
      <div>
        <p>2. مواضيع الموقع عن machine learning ؟</p>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating2(ratingValue)}
              />
              <FaStar
                className="star"
                color={
                  ratingValue <= (hover2 | rating2) ? "#ffc107" : "#e4e5e9"
                }
                size={20}
                onMouseEnter={() => setHover2(ratingValue)}
                onMouseLeave={() => setHover2(null)}
              />
            </label>
          );
        })}
        <p>التقييم : {rating2}</p>
      </div>
      <div>
        <p> 3. أية اقتراحات أخرى : </p>
        <input
          type="text"
          placeholder="ادخل اسمك"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <textarea
          placeholder="الرجاء كتابة اقتراحاتك"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
        ></textarea>
        {error.length > 1 ? (
          <>
            <br /> <br />
            <strong
              style={{
                marginBottom: "0px",
                fontSize: "14px",
                color: "#ffafaf",
              }}
            >
              * {error}
            </strong>
            <br /> <br />
          </>
        ) : null}
      </div>

      <button onClick={handleClick}>إرسال رأيك</button>
    </>
  );
};

export default StarRating;
