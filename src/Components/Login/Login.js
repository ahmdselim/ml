import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { loginUser } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logInUserAction = (email, password) => {
    loginUser(email, password, dispatch);
  };
  const login = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setError("Please enter your email");
    } else if (password.length === 0) {
      setError("Please enter your password");
    } else {
      logInUserAction(email, password);
      setEmail("");
      setPassword("");
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
      <h2>Hey,</h2>
      <p>Login Now.</p>
      <div className="content">
        <form onSubmit={login}>
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
          <button>Login</button>
        </form>
        <p>
          I don't have an account . <Link to="/signup"> Signup</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
