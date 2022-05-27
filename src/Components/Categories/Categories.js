import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.Reducer.categories);
  return (
    <div className="projects" style={{ direction: "rtl" }}>
      <h3>Categories</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {categories &&
          categories.map((category, i) => (
            <SwiperSlide key={i}>
              <div>
                <img src={category.data.catImg} alt="category image" />
                <div
                  className="project-info"
                  style={{ justifyContent: "center" }}
                >
                  <strong>{category.data.catName}</strong>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Categories;
