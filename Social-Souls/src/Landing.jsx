import { useState } from "react";
import "./Landing.css";
import axios from "axios";
// import { motion } from "framer-motion";
// import logotrans from "./assets/logo_trans.png";

export default function Landing() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (ev) => {
    ev.preventDefault();
    await axios.post("/register", { username, password });
  };

  return (
    <>
      <div id="header_container">
        <div className="text-container">
          <h1 id="header">
            Welcome to <span className="header2">Social Souls</span>
          </h1>
          <p className="description">A dreadfully engaging social platform</p>
        </div>
        <div className="image-container"></div>
      </div>

      <div className="form-container">
        {/* Checkbox used to toggle forms */}
        <input type="checkbox" id="signup-toggle" />

        <form className="form" onSubmit={register}>
          <div className="form_front">
            <div className="form_details">Sign Up</div>
            <input
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              placeholder="Username"
              className="input"
              type="text"
            />
            <input
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="Password"
              className="input"
              type="password"
            />
            <button type="submit" className="btn">
              {" "}
              {/* Change type to "submit" */}
              Register
            </button>
            <span className="switch">
              Already have an account?
              <label className="signup_tog" htmlFor="signup-toggle">
                Sign up
              </label>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
