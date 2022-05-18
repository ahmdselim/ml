import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { IoCartOutline } from "react-icons/io5";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import avatar1 from "../images/avater1.jpg";
import avatar2 from "../images/avater2.jpg";
import avatar3 from "../images/avater3.jpg";
import avatar4 from "../images/avater4.jpg";
import avatar5 from "../images/avater5.jpg";
import avatar6 from "../images/avater6.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h3>Projects</h3>
      <Swiper
        slidesPerView={1}
        loop="true"
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
        <SwiperSlide>
          <div>
            <img src={img1} alt="img1" />
            <div className="project-info">
              <strong>Ahmed</strong>
              <strong>120 $</strong>
            </div>
            <img src={avatar1} alt="avater" className="avater" />
            <span>@Ahmed</span>
            <a className="addCart">
              <IoCartOutline />
              <span>Add Cart</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} alt="img1" />
            <div className="project-info">
              <strong>Mohamed</strong>
              <strong>340 $</strong>
            </div>
            <img src={avatar2} alt="avater" className="avater" />
            <span>@Mohamed</span>
            <a className="addCart">
              <IoCartOutline />
              <span>Add Cart</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} alt="img1" />
            <div className="project-info">
              <strong>Saeed</strong>
              <strong>230 $</strong>
            </div>
            <img src={avatar3} alt="avater" className="avater" />
            <span>@Saeed</span>
            <a className="addCart">
              <IoCartOutline />
              <span>Add Cart</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img4} alt="img1" />
            <div className="project-info">
              <strong>Hima</strong>
              <strong>220 $</strong>
            </div>
            <img src={avatar4} alt="avater" className="avater" />
            <span>@Hima</span>
            <a className="addCart">
              <IoCartOutline />
              <span>Add Cart</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img5} alt="img1" />
            <div className="project-info">
              <strong>Abdo</strong>
              <strong>520 $</strong>
            </div>
            <img src={avatar5} alt="avater" className="avater" />
            <span>@Abdo</span>
            <a className="addCart">
              <IoCartOutline />
              <span>Add Cart</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img6} alt="img1" />
            <div className="project-info">
              <strong>Sayed</strong>
              <strong>200 $</strong>
            </div>
            <img src={avatar6} alt="avater" className="avater" />
            <span>@Sayed</span>
            <a className="addCart">
              <IoCartOutline />
              <span>Add Cart</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
