import React from "react";
import Categories from "../../Components/Categories/Categories";
import Nav from "../../Components/Home/Nav";
import Footer from "../../Components/Home/Footer";
import "./style.css";

const ProjectPage = () => {
  return (
    <div className="container">
      <section className="head">
        <Nav />
      </section>
      <Categories />
      <Footer />
    </div>
  );
};

export default ProjectPage;
