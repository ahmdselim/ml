import React from "react";
import AboutUS from "../../Components/aboutUS/AboutUS";
import Nav from "../../Components/Home/Nav";
import Footer from "../../Components/Home/Footer";

const AboutUsPage = () => {
  return (
    <div className="container">
      <section className="head">
        <Nav />
      </section>
      <AboutUS />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
