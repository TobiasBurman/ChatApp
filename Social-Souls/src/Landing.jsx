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

      <div class="container">
  <input type="checkbox" id="register_toggle"></input>
  <div class="slider">
    <form class="form">
      <span class="title">Login</span>
      <div class="form_control">
        <input type="text" class="input" required=""></input>
        <label class="label">Username</label>
      </div>
      <div class="form_control">
        <input type="password" class="input" required=""></input>
        <label class="label">Password</label>
      </div>
      <button>Login</button>

      <span class="bottom_text">Don't have an account? <label for="register_toggle" class="swtich">Sign Up</label> </span>
    </form>


    
    <form class="form">
      <span class="title">Sign Up</span>
      <div class="form_control">
        <input type="text" class="input" required=""></input>
        <label class="label">Username</label>
      </div>
      <div class="form_control">
        <input type="email" class="input" required=""></input>
        <label class="label">Email</label>
      </div>
      <div class="form_control">
        <input type="password" class="input" required=""></input>
        <label class="label">Password</label>
      </div>
      <button>Sign Up</button>

      <span class="bottom_text">Already have an account? <label for="register_toggle" class="swtich">Sign In</label> </span>
    </form>

    
    </div>
</div>

    






              
          
    </>
  );
}
