import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import parse from "html-react-parser";

const Project = () => {
  const projects = useSelector((state) => state.Reducer.projects);
  const users = useSelector((state) => state.Reducer.users);
  const { id } = useParams();
  const [scrollTop, setScrollTop] = useState(0);

  const progressBarSmooth = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", progressBarSmooth);
    return () => {
      window.removeEventListener("scroll", progressBarSmooth);
    };
  }, []);

  return (
    <section className="project">
      {projects &&
        projects.map((project, i) => {
          if (project.id === id) {
            return (
              <Fragment key={i}>
                <div className="banner" style={{ direction: "ltr" }}>
                  <h3>{project.data.projectName}</h3>
                  <p>
                    <Link to="/">الرئيسية</Link> <span>&gt;</span>
                    <Link to="/projects">المدونة</Link> <span>&gt;</span>
                    <span
                      style={{
                        fontWeight: "800",
                        fontSize: "15px",
                      }}
                    >
                      {project.data.projectName}
                    </span>
                  </p>
                </div>
                <div className="content">
                  <div className="pic">
                    <img src={project.data.projectImg} alt="logo" />
                  </div>
                  <div className="info">
                    <h3>{project.data.projectName}</h3>
                    <strong>الكاتب</strong>
                    {users &&
                      users
                        .filter(
                          (person) => person.data.uid === project.data.userID
                        )
                        .map((project, i) => (
                          <img src={project.data.image} alt="user" key={i} />
                        ))}
                    <span>
                      {users &&
                        users
                          .filter(
                            (user) => user.data.uid === project.data.userID
                          )
                          .map((person, i) => (
                            <Fragment>{person.data.name}</Fragment>
                          ))}
                    </span>
                    <div className="projectInfo">
                      <strong>البريد الالكتروني</strong>
                      <span>
                        {users &&
                          users
                            .filter(
                              (user) => user.data.uid === project.data.userID
                            )
                            .map((person, i) => (
                              <Fragment>{person.data.email}</Fragment>
                            ))}
                      </span>
                    </div>
                  </div>
                  <div
                    className="blog"
                    style={{
                      width: "85%",
                      margin: "50px auto",
                    }}
                  >
                    {parse(project.data.projectDesc)}
                  </div>
                </div>
              </Fragment>
            );
          }
        })}

      <div id="progressBar" style={{ width: `${scrollTop}%` }}></div>
    </section>
  );
};

export default Project;
