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
  const [projectReason, setProjectReason] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectCat, setProjectCat] = useState("");
  const [projectCountry, setProjectCountry] = useState("");
  const [projectMonIncome, setProjectMonIncome] = useState();
  const [projectNetIncome, setProjectNetIncome] = useState();
  const [projectPrice, setProjectPrice] = useState();
  const [projectPhoneNum, setProjectPhoneNum] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUpload === null) {
      setError("Please choose project image");
    } else if (projectName.length === 0) {
      setError("Please enter project name");
    } else if (projectReason.length === 0) {
      setError("Please enter your reason to sell");
    } else if (projectDesc.length === 0) {
      setError("Please enter project description");
    } else if (projectCat.length === 0) {
      setError("Please enter project categories");
    } else if (projectCountry.length === 0) {
      setError("Please enter project country");
    } else if (projectMonIncome.length === 0) {
      setError("Please enter monthly income of project");
    } else if (projectNetIncome.length === 0) {
      setError("Please enter net income of project");
    } else if (projectPrice.length === 0) {
      setError("Please enter project price");
    } else if (projectPhoneNum.length === 0) {
      setError("Please enter your number phone");
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
              projectReason,
              projectDesc,
              projectCat,
              projectCountry,
              projectMonIncome,
              projectNetIncome,
              projectPrice,
              projectPhoneNum,
              dispatch
            );
            getProjects(dispatch);
          });
        }
      );
      setError("Advertisement posted successfully! 🎉");
      getProjects(dispatch);
      setImageUpload(null);
      setProjectName("");
      setProjectReason("");
      setProjectDesc("");
      setProjectCat("");
      setProjectCountry("");
      setProjectMonIncome("");
      setProjectNetIncome("");
      setProjectPrice("");
      setProjectPhoneNum("");
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
        <h3 style={{ color: "#FFF" }}>Publish Ad</h3>
        <p>
          <Link to="/">Home</Link>
          <span>></span>
          <Link to="/projects">Projects</Link>
          <span>></span>
          <span
            style={{
              fontWeight: "800",
              fontSize: "16px",
            }}
          >
            New Ad
          </span>
        </p>
      </div>
      <div className="createProject">
        <h2 style={{ direction: "rtl" }}>Add new project</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            placeholder="Choose the project image"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
          />
          {progress && progress ? <> loading {progress} %</> : null}
          <input
            type="text"
            placeholder="Project Name"
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
          />
          <input
            type="text"
            placeholder="reason sale"
            onChange={(e) => setProjectReason(e.target.value)}
            value={projectReason}
          />
          <textarea
            placeholder="description"
            onChange={(e) => setProjectDesc(e.target.value)}
            value={projectDesc}
          ></textarea>
          <select onChange={(e) => setProjectCat(e.target.value)}>
            <option>Choose category</option>
            {categories &&
              categories.map((category, i) => (
                <option key={i} value={category.data.catName}>
                  {category.data.catName}
                </option>
              ))}
          </select>
          <select onChange={(e) => setProjectCountry(e.target.value)}>
            <option>choose country</option>
            <option value="مسقط">مسقط</option>
            <option value="ظفار">ظفار</option>
            <option value="البريمي">البريمي</option>
            <option value="الداخلية">الداخلية</option>
            <option value="شمال الباطنه">شمال الباطنه</option>
            <option value="جنوب الباطنه">جنوب الباطنه</option>
            <option value="شمال الشرقية">شمال الشرقية</option>
            <option value="جنوب الشرقية">جنوب الشرقية</option>
            <option value="الظاهرة">الظاهرة</option>
            <option value="الوسطي">الوسطي</option>
          </select>
          <ul>
            <li>
              <input
                type="number"
                placeholder="month income"
                onChange={(e) => setProjectMonIncome(parseInt(e.target.value))}
                value={projectMonIncome}
              />
            </li>
            <li>
              <input
                type="number"
                placeholder="year income"
                onChange={(e) => setProjectNetIncome(parseInt(e.target.value))}
                value={projectNetIncome}
              />
            </li>
            <li>
              <input
                type="number"
                placeholder="project price"
                onChange={(e) => setProjectPrice(parseInt(e.target.value))}
                value={projectPrice}
              />
            </li>
            <li>
              <input
                type="number"
                placeholder="phone number"
                onChange={(e) => setProjectPhoneNum(parseInt(e.target.value))}
                value={projectPhoneNum}
              />
            </li>
          </ul>
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
          <button>Add Project</button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
