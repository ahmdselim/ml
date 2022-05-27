import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import avatar1 from "../images/avater1.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const ProjectsArea = () => {
  const projects = useSelector((state) => state.Reducer.projects);
  const users = useSelector((state) => state.Reducer.users);

  return (
    <div className="projects">
      <h3>Projects</h3>
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
        {projects &&
          projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div>
                <img src={project.data.projectImg} alt="project image" />
                <div className="project-info">
                  <strong>
                    {users &&
                      users
                        .filter((user) => user.data.uid === project.data.userID)
                        .map((person) => person.data.name)}
                  </strong>
                  <strong>{project.data.projectPrice} OMR</strong>
                </div>
                <h3>{project.data.projectName}</h3>
                {users &&
                  users
                    .filter((user) => user.data.uid === project.data.userID)
                    .map((person, i) => (
                      <img
                        src={person.data.image}
                        alt="avater"
                        className="avater"
                        style={{ marginLeft: "20px" }}
                        key={i}
                      />
                    ))}
                <span>
                  @
                  {users &&
                    users
                      .filter((user) => user.data.uid === project.data.userID)
                      .map((person) => person.data.name)}
                </span>
                <br />
                <br />
                <span>{project.data.projectCountry}</span>
                <br />
                <Link to={`/project/${project.id}`} className="addCart">
                  <IoCartOutline />
                  <span>Open Ads</span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ProjectsArea;
