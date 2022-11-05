import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import boy from "../images/boy.jpg";
import quote from "../images/qoute.png";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const Comments = () => {
  const feedback = useSelector((state) => state.Reducer.feedbacks);
  const [hover, setHover] = useState("");

  return (
    <div className="comments" id="comments">
      <div className="commentsContainer">
        <div className="headComments">
          <h1>التقييمات</h1>
          <p></p>
        </div>
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {feedback &&
              feedback.map((data) => (
                <SwiperSlide className="swiperSlide">
                  <ul className="swiperContent_comments">
                    <li className="liUp">
                      <img src={boy} alt="person" className="person" />
                      <h2>{data.data.name}</h2>
                    </li>
                    <li className="liQuote">
                      <img src={quote} alt="quote" />
                    </li>
                  </ul>
                  <div className="commentsContent">
                    <p>{data.data.suggestion}</p>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                          />
                          <FaStar
                            className="star"
                            color={
                              ratingValue <= (hover | data.data.rate1)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            size={15}
                          />
                        </label>
                      );
                    })}
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Comments;
