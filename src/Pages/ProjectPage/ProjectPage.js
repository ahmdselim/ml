import React from "react";
import Project from "../../Components/Project/Project";
import Nav from "../../Components/Home/Nav";
import Footer from "../../Components/Home/Footer";
import "./style.css";

const ProjectPage = () => {
  return (
    <div className="container">
      <section className="head">
        <Nav />
      </section>
      <Project />
      <Footer />
    </div>
  );
};

export default ProjectPage;
