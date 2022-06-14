import React from "react";
import Feedback from "../../Components/Feedback/Feedback";
import Nav from "../../Components/Home/Nav";
import Footer from "../../Components/Home/Footer";
import "./style.css";
const FeedbackPage = () => {
  return (
    <div className="container">
      <section className="head">
        <Nav />
      </section>
      <Feedback />
      <Footer />
    </div>
  );
};

export default FeedbackPage;
