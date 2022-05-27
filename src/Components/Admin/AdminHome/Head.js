import React from "react";
import logo from "../../../Components/images/logo1.png";
import { logoutUser } from "../../../redux/actions/actions";
import { auth } from "../../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);
  const users = useSelector((state) => state.Reducer.users);

  const navigate = useNavigate();

  const logout = async (id) => {
    logoutUser(dispatch);
    navigate("/login");
  };
  return (
    <div className="navbarAdmin" style={{ direction: "rtl" }}>
      <div className="row">
        <div className="logoDiv">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="userSetting">
          {users &&
            user &&
            users
              .filter((person) => person.data.uid === user.uid)
              .map((person, i) => (
                <img key={i} src={person.data.image} alt="logo" />
              ))}
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
        </div>
      </div>
    </div>
  );
};
export default Head;
