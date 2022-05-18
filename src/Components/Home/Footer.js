import React from "react";
import logo from "../images/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="content">
        <div>
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non,
            fugit totam vel laboriosam vitae.
          </p>
        </div>
        <div>
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Explore</a>
            </li>
            <li>
              <a href="">Activity</a>
            </li>
            <li>
              <a href="">Privacy & Terms</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Partners</a>
            </li>
            <li>
              <a href="">Blog</a>
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
