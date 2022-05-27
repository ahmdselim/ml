import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, storage } from "../../../firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useSelector, useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { addCategories, getCategories } from "../../../redux/actions/actions";

const Content = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [catName, setCatName] = useState("");
  const users = useSelector((state) => state.Reducer.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUpload === null) {
      setError("Please choose project image");
    } else if (catName.length === 0) {
      setError("Please enter project name");
    } else {
      const sotrageRef = ref(storage, `categories/${imageUpload.name}`);
      const uploadTask = uploadBytesResumable(sotrageRef, imageUpload);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addCategories(downloadURL, catName, dispatch);
            getCategories(dispatch);
          });
        }
      );
      setError("Section has been added successfully 🎉");
      setImageUpload(null);
      setCatName("");
    }
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) {
      navigate("/login");
    }
    user &&
      users &&
      users.map((person) =>
        person.data.uid === user.uid
          ? person.data.status === 0
            ? navigate("/login")
            : null
          : null
      );
  }, [user, loading, navigate, users]);
  return (
    <div className="adminContent">
      <div className="addProject">
        <div className="createProject">
          <h2>Add new category</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              placeholder="choose category image"
              onChange={(e) => {
                setImageUpload(e.target.files[0]);
              }}
            />
            {progress && progress ? <> Uploading done {progress} %</> : null}
            <input
              type="text"
              placeholder="name of category"
              onChange={(e) => setCatName(e.target.value)}
              value={catName}
            />
            {error.length > 1 ? (
              <>
                <br />
                <br />
                <strong
                  style={{
                    marginBottom: "0px",
                    fontSize: "14px",
                    color: "#ffafaf",
                  }}
                >
                  * {error}
                </strong>
              </>
            ) : null}
            <button>Add Category</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Content;
