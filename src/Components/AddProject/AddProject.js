import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, storage } from "../../firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { addProjects, getProjects } from "../../redux/actions/actions";

const AddProject = () => {
  const categories = useSelector((state) => state.Reducer.categories);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectCat, setProjectCat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUpload === null) {
      setError("اضف صورة للمقال");
    } else if (projectName.length === 0) {
      setError("اضف اسم للمقال");
    }else if (projectDesc.length === 0) {
      setError("اضف المقال");
    } else if (projectCat.length === 0) {
      setError("اخار قسم للمقال");
    } else {
      const sotrageRef = ref(storage, `projects/${imageUpload.name}`);
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
            addProjects(
              user.uid,
              downloadURL,
              projectName,
              projectDesc,
              projectCat,
              dispatch
            );
            getProjects(dispatch);
          });
        }
      );
      setError("تم إضافة المقال بنجاح 🎉");
      getProjects(dispatch);
      setImageUpload(null);
      setProjectName("");
      setProjectDesc("");
      setProjectCat("");
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);
  return (
    <div className="addProject">
      <div className="banner">
        <h3 style={{ color: "#FFF" }}>إضافة مقال</h3>
        <p>
          <Link to="/">الرئيسية</Link>
          <span>{" > "}</span>
          <Link to="/projects">المقالات</Link>
          <span>{" > "}</span>
          <span
            style={{
              fontWeight: "800",
              fontSize: "16px",
            }}
          >
            إضافة مقال
          </span>
        </p>
      </div>
      <div className="createProject">
        <h2 style={{ direction: "rtl" }}>إضافة مقال جديد</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            placeholder="اضف صورة للمقال"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
          />
          {progress && progress ? <> loading {progress} %</> : null}
          <input
            type="text"
            placeholder="اسم المقال"
            onChange={(e) => setProjectName(e.target.value)}
            defaultValue={projectName}
          />
          <textarea
            placeholder="المقال"
            onChange={(e) => setProjectDesc(e.target.value)}
            defaultValue={projectDesc}
          ></textarea>
          <select onChange={(e) => setProjectCat(e.target.value)}>
            <option>اختار القسم</option>
            {categories &&
              categories.map((category, i) => (
                <option key={i} value={category.data.catName}>
                  {category.data.catName}
                </option>
              ))}
          </select>

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
          <button>اضف المقال</button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
