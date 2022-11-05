import React, { useState } from "react";
import { IoRocket } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../images/dsMain.png";

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
            <h2>Machine Learning بالعربــي</h2>
            <p>
              مدونة عربية لمساعدة التقنيين في فهم مفاهيم التعلم الآلي ومناقشة
              التعلم الآلي وأغراضه{" "}
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
