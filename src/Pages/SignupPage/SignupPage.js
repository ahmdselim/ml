import React from "react";
import Nav from "../../Components/Home/Nav";
import Signup from "../../Components/Signup/Signup";
import Footer from "../../Components/Home/Footer";
import "../LoginPage/style.css";

const SignupPage = () => {
  return (
    <div className="container">
      <section className="head">
        <Nav />
      </section>
      <Signup />
      <Footer />
    </div>
  );
};

export default SignupPage;
