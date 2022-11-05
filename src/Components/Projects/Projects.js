import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProjectsArea from "../Home/ProjectsArea";
import { IoCartOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
const Projects = () => {
  return (
    <section className="project" style={{ direction: "rtl" }}>
      <div className="banner">
        <h3>المدونة</h3>
        <p style={{ direction: "ltr" }}>
          <Link to="/">الرئيسية</Link>
        </p>
      </div>

      <div className="projects">
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
          <ProjectsArea />
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
