import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProjectsArea from "../Home/ProjectsArea";
import { IoCartOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
const Projects = () => {
  const projects = useSelector((state) => state.Reducer.projects);
  const users = useSelector((state) => state.Reducer.users);
  const [search, setSearch] = useState("");
  const countries = [
    "Ad Dhahirah",
    "Dhofar",
    "Ad Dakhiliyah",
    "Ad Dakhiliyah",
    "Al Batinah South",
    "Al Batinah South",
    "Al Wusta",
    "Ash Sharqiyah North",
    "Ash Sharqiyah South",
    "Musandam",
    "All",
  ];

  return (
    <section className="project" style={{ direction: "rtl" }}>
      <div className="banner">
        <h3>Projects</h3>
        <p style={{ direction: "ltr" }}>
          <Link to="/">Home</Link>
        </p>
      </div>
      <ul className="chooseCountry">
        <h2 style={{ direction: "ltr" }}>Where can we help you ?</h2>
        {countries.map((project, i) => (
          <li key={i} onClick={(e) => setSearch(e.target.innerHTML)}>
            <strong>{project}</strong>
          </li>
        ))}
      </ul>
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
          {projects &&
          projects.filter((project) => project.data.projectCountry === search)
            .length > 0 ? (
            projects
              .filter((project) => project.data.projectCountry === search)
              .map((project, i) => (
                <>
                  <SwiperSlide
                    key={i}
                    onClick={(e) => setSearch(e.target.innerHTML)}
                  >
                    <div>
                      <img src={project.data.projectImg} alt="project" />
                      <div className="project-info">
                        <strong>
                          {users &&
                            users
                              .filter(
                                (user) => user.data.uid === project.data.userID
                              )
                              .map((person) => person.data.name)}
                        </strong>
                        <strong>{project.data.projectPrice} OMR</strong>
                      </div>
                      <h3>{project.data.projectName}</h3>
                      {users &&
                        users
                          .filter(
                            (user) => user.data.uid === project.data.userID
                          )
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
                            .filter(
                              (user) => user.data.uid === project.data.userID
                            )
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
                </>
              ))
          ) : (
            <ProjectsArea />
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
