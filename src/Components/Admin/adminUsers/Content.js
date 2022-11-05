import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeAdmin, getUsers } from "../../../redux/actions/actions";
const Content = () => {
  const users = useSelector((state) => state.Reducer.users);
  const dispatch = useDispatch();

  const updateUser = (id, admin) => {
    makeAdmin(id, admin);
    getUsers(dispatch);
  };

  return (
    <div className="adminContent">
      <div
        className="contentTable"
        style={{ width: "100%", marginLeft: "50px" }}
      >
        <h3>الاعضاء</h3>
        <table className="table">
          <thead>
            <tr>
              <th>الاسم</th>
              <th>البريد الالكتروني</th>
              <th>الرتبة</th>
              <th>تغيير الرتبة</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((person, i) => (
                <tr key={i}>
                  <td>
                    <p>{person.data.name}</p>
                  </td>
                  <td>
                    <p>{person.data.email}</p>
                  </td>
                  <td>
                    <p>{person.data.status === 1 ? "أدمن" : "مستخدم"}</p>
                  </td>
                  <td className="subtotal_users">
                    <div className="switch_box box_1">
                      <input
                        type="checkbox"
                        className="switch_1"
                        checked={person.data.status === 1 ? true : false}
                        onChange={() =>
                          updateUser(person.id, person.data.status)
                        }
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
