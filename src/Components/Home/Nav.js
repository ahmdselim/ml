import React, { useState } from "react";
import { IoLogIn, IoSearch, IoMenu, IoClose } from "react-icons/io5";
import logo from "../images/logo.png";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [openS, setOpenS] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className={visible ? "nav-links open" : "nav-links close"}>
          <ul>
            <IoClose
              style={
                visible
                  ? {
                      display: "block",
                      position: "absolute",
                      right: "5%",
                      top: "10%",
                      color: "#FFF",
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                    }
                  : { display: "none" }
              }
              onClick={() => setVisible(!visible)}
            />
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Explore</a>
            </li>
            <li>
              <a href="/">Activity</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
            <li>
              <a href="/">Pages</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className={openS ? "searchArea openS" : "searchArea closeS"}>
          <IoClose
            style={
              openS
                ? {
                    display: "block",
                    position: "absolute",
                    right: "5%",
                    top: "10%",
                    color: "#FFF",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                  }
                : { display: "none" }
            }
            onClick={() => setOpenS(!openS)}
          />
          <h2>What are you looking for?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <input type="text" placeholder="Enter Your KeyWords" />
          <button>Search</button>
        </div>

        <div className="nav-icons">
          <IoSearch onClick={() => setOpenS(!openS)} />
          <IoMenu className="menu" onClick={() => setVisible(!visible)} />
          <a href="/">
            <IoLogIn />
            <span>Login</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
