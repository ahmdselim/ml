import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

const Content = () => {
  const users = useSelector((state) => state.Reducer.users);
  const projects = useSelector((state) => state.Reducer.projects);

  return (
    <div className="adminContent">
      <div className="row">
        <div className="contentShowUsers">
          <h3>الأعضاء</h3>
          <ul>
            {users &&
              users.map((person, i) => (
                <li key={i}>
                  <img src={person.data.image} alt="user " />
                  <p>{person.data.name}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="contentTable">
          <h3>المقالات</h3>
          <table className="table ">
            <thead>
              <tr>
                <th>الكاتب</th>
                <th>اسم المقال</th>
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
