import React from "react";
import AddProject from "../../Components/AddProject/AddProject";
import Nav from "../../Components/Home/Nav";
import Footer from "../../Components/Home/Footer";
import "./style.css";

const AddProjectPage = () => {
  return (
    <div className="container">
      <section className="head">
        <Nav />
      </section>
      <AddProject />
      <Footer />
    </div>
  );
};

export default AddProjectPage;
