import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProject, getProjects } from "../../../redux/actions/actions";
const Content = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.Reducer.projects);
  const users = useSelector((state) => state.Reducer.users);
  const deleteProjects = (id) => {
    deleteProject(id);
    getProjects(dispatch);
  };
  return (
    <div className="adminContent">
      <div
        className="contentTable"
        style={{ width: "100%", marginLeft: "50px" }}
      >
        <h3>المقالات</h3>
        <table className="table">
          <thead>
            <tr>
              <th>الكاتب</th>
              <th>عنوان المقالة</th>
              <th>مسح المقالة</th>
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
                  <td className="subtotal_users">
                    <div className="switch_box box_1">
                      <input
                        type="checkbox"
                        className="switch_1"
                        onChange={() => deleteProjects(project.id)}
                        style={{ marginRight: "20px" }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
