import React, { useState } from "react";
import { IoRocket, IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../images/log.jpg";

const Navbar = () => {
  const [X, setX] = useState("");
  const [Y, setY] = useState("");

  const mouseMove = (e) => {
    const xWidth = (window.innerWidth - e.pageX * 8) / 100;
    const yWidth = (window.innerWidth - e.pageY * 8) / 100;
    setX(xWidth);
    setY(yWidth);
  };
  return (
    <>
      <section className="head">
        <div className="title">
          <div className="headC">
            <h2>
              Welcome to the largest platform for buying and selling projects
            </h2>
            <p>
              The largest platform for buying and selling projects in the
              Sultanate of Oman. Our goal is to re-create opportunities for
              entrepreneurs and business owners in the field of entrepreneurship
              and provide them with the opportunity to invest and enter the
              world of entrepreneurship and the prosperity of the economy in the
              Sultanate.
            </p>
            <Link to="/projects">
              <IoRocket />
              <span>تصفح المشاريع</span>
            </Link>
          </div>
          <div className="headImg">
            <img
              onMouseMove={mouseMove}
              style={{
                transform: `translateX(${X}px) translateY(${Y}px)`,
                transition: `all 1.2s linear`,
                mixBlendMode: "darken",
              }}
              src={logo}
              alt="logo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
