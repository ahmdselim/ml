import React from "react";
import logo from "../../../Components/images/logo1.png";
import { useSelector } from "react-redux";
import { auth } from "../../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const Content = () => {
  const users = useSelector((state) => state.Reducer.users);
  const projects = useSelector((state) => state.Reducer.projects);
  const [user] = useAuthState(auth);

  return (
    <div className="adminContent">
      <div className="row">
        <div className="contentShowUsers">
          <h3>Users</h3>
          <ul>
            {users &&
              users.map((person, i) => (
                <li key={i}>
                  <img src={person.data.image} alt="user image" />
                  <p>{person.data.name}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="contentTable">
          <h3>Projects</h3>
          <table className="table ">
            <thead>
              <tr>
                <th>Project Owner</th>
                <th>project Name</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {projects &&
                projects.map((project, i) => (
                  <tr key={i}>
                    <td>
                      {users &&
                        users
                          .filter(
                            (person) => person.data.uid === project.data.userID
                          )
                          .map((project, i) => (
                            <p key={i}>{project.data.name}</p>
                          ))}
                    </td>
                    <td>
                      <p>{project.data.projectName}</p>
                    </td>
                    <td>
                      <p>{project.data.projectCountry}</p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Content;
