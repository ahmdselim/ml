import React from "react";
import Privacy from "../../Components/privacy/Privacy";
import Nav from "../../Components/Home/Nav";
import Footer from "../../Components/Home/Footer";

const PrivacyPage = () => {
  return (
    <div className="container">
      <section className="head">
        <Nav />
      </section>
      <Privacy />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
