import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoLogIn, IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
import { logoutUser } from "../../redux/actions/actions";
import { auth } from "../../firebase/config";
const Nav = () => {
  const users = useSelector((state) => state.Reducer.users);
  const projects = useSelector((state) => state.Reducer.projects);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);
  const logout = async (id) => {
    logoutUser(dispatch);
  };
  const [visible, setVisible] = useState(false);
  const [openS, setOpenS] = useState(false);
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
    const ProjectSearch =
      projects &&
      projects.filter((project) =>
        project.data.projectName.toLowerCase().includes(search)
      );
    setData(ProjectSearch);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "40px", borderRadius: "25px" }}
            />
          </Link>
        </div>

        <div className={visible ? "nav-links open" : "nav-links close"}>
          <div className="overlay">
            <ul>
              <IoClose
                className="closeSvg"
                style={
                  visible
                    ? {
                        display: "block",
                        position: "absolute",
                        right: "5%",
                        top: "10%",
                        color: "#000",
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }
                    : { display: "none" }
                }
                onClick={() => setVisible(!visible)}
              />
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
                <Link to="/feedback">Feedback</Link>
              </li>
              {user && user ? (
                <li>
                  <Link to="/addProject">New Ad</Link>
                </li>
              ) : null}
              {user &&
                users &&
                users.map((person, i) =>
                  person.data.uid === user.uid ? (
                    person.data.status === 1 ? (
                      <li key={i}>
                        <Link to="/admin">Control Panel</Link>
                      </li>
                    ) : null
                  ) : null
                )}
            </ul>
          </div>
        </div>

        <div className={openS ? "searchArea openS" : "searchArea closeS"}>
          <div className="overlay">
            <div style={{ padding: "40px" }}>
              <IoClose
                style={
                  openS
                    ? {
                        display: "block",
                        right: "5%",
                        top: "10%",
                        color: "#000",
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }
                    : { display: "none" }
                }
                onClick={() => setOpenS(!openS)}
              />
              <h2>What are you looking for?</h2>
              <p>We hope you find what you are looking for</p>
              <input
                type="text"
                placeholder="Search by name"
                onChange={(e) => handleChange(e)}
              />
              {data.length > 0 ? (
                <ul style={{ margin: "0", padding: "0" }}>
                  {data.map((project) => (
                    <li style={{ marginBottom: "20px", width: "80%" }}>
                      <Link
                        to={`/project/${project.id}`}
                        style={{ color: "#000", fontWeight: "700" }}
                      >
                        <div
                          style={{
                            padding: "5px 15px",
                            border: "1px solid #DDD",
                            borderRadius: "8px",
                          }}
                        >
                          {project.data.projectName}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No results!</p>
              )}
            </div>
          </div>
        </div>

        <div className="nav-icons">
          <IoSearch onClick={() => setOpenS(!openS)} />
          <IoMenu
            className="menu"
            onClick={() => setVisible(!visible)}
            style={{ marginRight: "20px" }}
          />
          {user && user ? (
            <>
              <td className="subtotal_users">
                <div className="switch_box box_1">
                  <input
                    type="checkbox"
                    className="switch_1"
                    checked={user ? true : false}
                    onChange={() => logout(user.uid)}
                    style={{ marginRight: "20px" }}
                  />
                </div>
              </td>
            </>
          ) : (
            <Link to="/login" style={{ marginRight: "10px" }}>
              <span style={{ marginLeft: "10px" }}>Login</span>
              <IoLogIn />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
