import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import avatar1 from "../images/avater1.jpg";
import avatar2 from "../images/avater2.jpg";
import avatar3 from "../images/avater3.jpg";
import avatar4 from "../images/avater4.jpg";
import avatar5 from "../images/avater5.jpg";
import avatar6 from "../images/avater6.jpg";

const Sales = () => {
  return (
    <div className="sales">
      <h3>Top sales</h3>
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
            <img src={avatar1} alt="avater" className="avaterS" />
            <span>@Ahmed</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={avatar2} alt="avater" className="avaterS" />
            <span>@Abdo</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={avatar3} alt="avater" className="avaterS" />
            <span>@Mohamed</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={avatar4} alt="avater" className="avaterS" />
            <span>@Saeed</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={avatar5} alt="avater" className="avaterS" />
            <span>@Hima</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={avatar6} alt="avater" className="avaterS" />
            <span>@Sayed</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sales;
