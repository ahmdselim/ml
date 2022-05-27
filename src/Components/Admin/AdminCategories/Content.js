import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../../firebase/config";
import {
  deleteCategories,
  getCategories,
} from "../../../redux/actions/actions";
import { useAuthState } from "react-firebase-hooks/auth";
const Content = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Reducer.categories);
  const users = useSelector((state) => state.Reducer.users);
  const deleteCat = (id) => {
    deleteCategories(id);
    getCategories(dispatch);
  };
  return (
    <div className="adminContent">
      <div
        className="contentTable"
        style={{ width: "100%", marginLeft: "50px" }}
      >
        <h3>Categories</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((cat, i) => (
                <tr key={i}>
                  <td>
                    <p>{cat.data.catName}</p>
                  </td>
                  <td className="subtotal_users">
                    <div className="switch_box box_1">
                      <input
                        type="checkbox"
                        className="switch_1"
                        onChange={() => deleteCat(cat.id)}
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
