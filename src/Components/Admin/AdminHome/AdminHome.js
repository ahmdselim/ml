import React from "react";
import Content from "./Content";
import Head from "./Head";
import Sidebar from "./Sidebar";

const AdminHome = () => {
  return (
    <div className="adminContainer">
      <Head />
      <Sidebar />
      <Content />
      <p style={{ textAlign: "center" }}>&copy; 2022 , All Rights Reserved.</p>
    </div>
  );
};

export default AdminHome;
