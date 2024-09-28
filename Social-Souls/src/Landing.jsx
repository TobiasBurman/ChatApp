import { useState } from "react";
import "./Landing.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faUnlock} from "@fortawesome/free-solid-svg-icons";

// import { motion } from "framer-motion";
import logotrans from "./assets/logo_trans.png";




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
  <input type="checkbox" id="register_toggle"/>
  <div class="slider">
    <form class="form">
      <span class="title">Sign in</span>
     

      <div class="form__group field input-with-icon">
    <input type="input" class="form__field" placeholder="Username" required/> 
    <label for="name" class="form__label">Username</label>
    <FontAwesomeIcon icon={faUser} className="icon" />
</div>



<div class="form__group input-with-icon">
    <input type="password" className="form__field" placeholder="Password" required/>
    <label for="name" class="form__label">Password</label>
    <FontAwesomeIcon icon={faLock} className="icon" />
</div>
    
      <button className="Btn"></button>

      <span class="bottom_text">Don't have an account? <label for="register_toggle" class="swtich">Sign Up</label> </span>

    </form>


    
    <form class="form">
      <span class="title">Sign Up</span>

      <div class="form_control">
       <div class="form__group field">
        <input type="input" className="form__field" placeholder="Username" required/>
        <label for="name" class="form__label">Username</label>
        <FontAwesomeIcon icon={faUser} className="icons" />
       </div>
      </div>

      <div class="form_control">
       <div class="form__group field">
        <input type="password" className="form__field" placeholder="Confirm Password" required/>
        <label for="name" class="form__label">Password</label>
        <FontAwesomeIcon icon={faLock} className="icons" />
       </div>
      </div>

      <div class="form_control">
       <div class="form__group field">
        <input type="password" className="form__field" placeholder="Username" required />
        <label for="name" class="form__label">Confirm Password</label>
        <FontAwesomeIcon icon={faUnlock} className="icons" />
       </div>
      </div>
      <button className="Btn-signup"></button>

      <span class="bottom_text">Already have an account? <label for="register_toggle" class="swtich">Sign In</label> </span>
    </form>

    
    </div>
</div>

    


    </>
  );
}
