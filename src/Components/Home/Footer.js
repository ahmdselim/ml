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
          <p></p>
        </div>
        <div>
          <h3>الصفحات</h3>
          <ul>
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/projects">المقالات</Link>
            </li>
            <li>
              <Link to="/feedback">اضف تقييمك</Link>
            </li>
            <li>
              <Link to="/privacy"> سياسة الخصوصية</Link>
            </li>
            <li>
              <Link to="/aboutUs"> ماذا عنا</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p style={{ textAlign: "center" }}>
        &copy; حقوق النشر 2022، جميع الحقوق محفوظة .
      </p>
    </section>
  );
};

export default Footer;
