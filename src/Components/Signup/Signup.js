import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser, getUsers } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "../../firebase/config";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState([]);
  const [name, setName] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setError("Please enter your name");
    } else if (imageUpload === null) {
      setError("Please choose your image");
    } else if (email.length === 0) {
      setError("Please enter your email");
    } else if (password.length === 0) {
      setError("Please enter your password");
    } else {
      const sotrageRef = ref(storage, `users/${imageUpload.name}`);
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
            createUser(name, email, password, downloadURL, dispatch);
            getUsers(dispatch);
          });
        }
      );
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, loading, navigate]);
  return (
    <section className="login">
      <h2>Hello!</h2>
      <p>Sign up to get started.</p>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="file"
            placeholder="Choose Image"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
          />
          {progress && progress ? <> loading {progress} %</> : null}
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {error.length > 1 ? (
            <>
              <strong
                style={{
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "#ffafaf",
                }}
              >
                * {error}
              </strong>
              <br />
            </>
          ) : null}
          <button>Get Started</button>
        </form>
        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
