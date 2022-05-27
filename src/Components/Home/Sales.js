import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { Pagination } from "swiper";

const Sales = () => {
  const users = useSelector((state) => state.Reducer.users);
  const [user] = useAuthState(auth);
  const log =
    user && users && users.filter((person) => person.data.uid !== user.uid);

  return (
    <div className="sales">
      <h3>Top Sellers</h3>
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
        {users && users
          ? log
            ? log.map((person, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <img
                      src={person.data.image}
                      alt="avater"
                      className="avaterS"
                    />
                    <span>@{person.data.name}</span>
                  </div>
                </SwiperSlide>
              ))
            : users.map((person, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <img
                      src={person.data.image}
                      alt="avater"
                      className="avaterS"
                    />
                    <span>@{person.data.name}</span>
                  </div>
                </SwiperSlide>
              ))
          : users
          ? users.map((person, i) => (
              <SwiperSlide key={i}>
                <div>
                  <img
                    src={person.data.image}
                    alt="avater"
                    className="avaterS"
                  />
                  <span>@{person.data.name}</span>
                </div>
              </SwiperSlide>
            ))
          : "Not Found"}
      </Swiper>
    </div>
  );
};

export default Sales;
