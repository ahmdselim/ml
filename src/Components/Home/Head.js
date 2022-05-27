import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import Nav from "./Nav";
import Navbar from "./Navbar";

const Head = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  return (
    <section className="head">
      <Nav />
      <Navbar />
    </section>
  );
};

export default Head;
