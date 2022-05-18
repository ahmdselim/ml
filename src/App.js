import React from "react";
import Head from "./Components/Home/Head";
import Content from "./Components/Home/Content";
import Footer from "./Components/Home/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Head />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
