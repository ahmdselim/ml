import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

import pic from "../images/2.jpg";

const Project = () => {
  const [user] = useAuthState(auth);
  const projects = useSelector((state) => state.Reducer.projects);
  const users = useSelector((state) => state.Reducer.users);

  const dispatch = useDispatch();
  const { id } = useParams();

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
                    <Link to="/">Home</Link> <span>&gt;</span>
                    <Link to="/projects">Projects</Link> <span>&gt;</span>
                    <span
                      style={{
                        // color: "#ccc",
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
                    <p>{project.data.projectDesc}</p>
                    <strong>Advertiser</strong>
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
                      <strong>Selling reason</strong>
                      <span>{project.data.projectReason}</span>
                      <br />
                      <strong>Monthly Income</strong>
                      <span>{project.data.projectMonIncome}</span>
                      <br />
                      <strong>Year Income</strong>
                      <span>{project.data.projectNetIncome}</span>
                      <br />
                      <strong>Selling Price</strong>
                      <span>{project.data.projectPrice} OMR</span>
                      <br />
                      <strong>Phone Number</strong>
                      <span>{project.data.projectPhoneNum}</span>
                      <br />
                      <strong>Email</strong>
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
                      <br />
                      <strong>Country</strong>
                      <span>{project.data.projectCountry}</span>
                    </div>
                    {/* <button>Add Cart</button> */}
                  </div>
                </div>
              </Fragment>
            );
          }
        })}
    </section>
  );
};

export default Project;
