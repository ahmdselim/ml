import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo1.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="content">
        <div>
          <img
            src={logo}
            style={{ width: "35px", borderRadius: "25px" }}
            alt="logo"
          />
          <p>
            The largest platform for buying and selling projects in the
            Sultanate of Oman. Our goal is to re-create opportunities for
            entrepreneurs and business owners in the field of entrepreneurship
            and provide them with the opportunity to invest and enter the world
            of entrepreneurship and the prosperity of the economy in the
            Sultanate.
          </p>
        </div>
        <div>
          <h3>About B4S</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/addProject">New Ad</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p style={{ textAlign: "center" }}>
        &copy; 2022 B4 Sall, All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
