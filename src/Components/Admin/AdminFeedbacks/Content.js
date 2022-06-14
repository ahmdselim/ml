import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

const Content = () => {
  const [hover, setHover] = useState("");
  const feedbacks = useSelector((state) => state.Reducer.feedbacks);

  return (
    <div className="adminContent">
      <div
        className="contentTable"
        style={{ width: "100%", marginLeft: "50px" }}
      >
        <h3>Categories</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Suggestions</th>
              <th>Rate 1</th>
              <th>Rate 2</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks &&
              feedbacks.map((feedback, i) => (
                <tr key={i}>
                  <td>
                    <p>{feedback.data.name}</p>
                  </td>
                  <td>
                    <p>{feedback.data.suggestion}</p>
                  </td>
                  <td>
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
                              ratingValue <= (hover | feedback.data.rate1)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            size={20}
                          />
                        </label>
                      );
                    })}
                  </td>
                  <td>
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
                              ratingValue <= (hover | feedback.data.rate2)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            size={20}
                          />
                        </label>
                      );
                    })}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
