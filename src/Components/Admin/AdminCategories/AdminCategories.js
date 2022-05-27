import React from "react";
import Sidebar from "../AdminHome/Sidebar";
import Head from "../AdminHome/Head";
import Content from "./Content";

const AdminCategories = () => {
  return (
    <div className="adminContainer">
      <Head />
      <Sidebar />
      <Content />
    </div>
  );
};

export default AdminCategories;
