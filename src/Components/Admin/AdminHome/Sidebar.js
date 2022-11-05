import React, { useEffect } from "react";
import {
  LineStyle,
  PermIdentity,
  AttachMoney,
  BarChart,
  DynamicFeed,
  WorkOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
const Sidebar = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.Reducer.users);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) {
      navigate("/admin");
    }
    if (user) {
      users &&
        users
          .filter((person) => person.data.uid === user.uid)
          .map((person) => (person.data.status === 0 ? navigate("/") : null));
    }
  }, [user, loading, navigate, users]);
  return (
    <>
      <div className="sidebar-admin">
        <ul style={{ margin: "0", padding: "0" }}>
          <li>
            <Link to="/admin">
              <DynamicFeed className="sidebarIcon" />
              <span>الرئيسية</span>
            </Link>
          </li>
          <li>
            <Link to="/adminFeedbacks">
              <BarChart className="sidebarIcon" />
              <span>التقييمات</span>
            </Link>
          </li>
          <li>
            <Link to="/adminUsers">
              <PermIdentity className="sidebarIcon" />
              <span>الأعضاء</span>
            </Link>
          </li>
          <li>
            <Link to="/adminProjects">
              <AttachMoney className="sidebarIcon" />
              <span>المقالات</span>
            </Link>
          </li>
          <li>
            <Link to="/adminCategories">
              <WorkOutline className="sidebarIcon" />
              <span>الأقسام</span>
            </Link>
          </li>
          <li>
            <Link to="/adminAddCategories">
              <LineStyle className="sidebarIcon" /> <span>إضافة قسم</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
