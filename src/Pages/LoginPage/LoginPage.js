import React from "react";
import Nav from "../../Components/Home/Nav";
import Login from "../../Components/Login/Login";
import Footer from "../../Components/Home/Footer";
import "./style.css";

const LoginPage = () => {
  return (
    <div className="container">
      <section className="head">
        <Nav />
      </section>
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
