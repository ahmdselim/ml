import React from "react";
import Projects from "../../Components/Projects/Projects";
import Nav from "../../Components/Home/Nav";
import Footer from "../../Components/Home/Footer";
import "./style.css";
const ProjectsPage = () => {
  return (
    <div className="container">
      <section className="head">
        <Nav />
      </section>
      <Projects />
      <Footer />
    </div>
  );
};
export default ProjectsPage;
