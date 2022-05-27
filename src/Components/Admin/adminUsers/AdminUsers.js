import React from "react";
import Sidebar from "../AdminHome/Sidebar";
import Head from "../AdminHome/Head";
import Content from "./Content";

const AdminUsers = () => {
  return (
    <div className="adminContainer">
      <Head />
      <Sidebar />
      <Content />
    </div>
  );
};

export default AdminUsers;
