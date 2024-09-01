import { useState } from 'react'
import './Landing.css'
import {motion} from "framer-motion"
import logotrans from "./assets/logo_trans.png"





function App() {


  return (
    <>
        <div id="header_container">
        <div className="text-container">
          <h1 id='header'>Welcome to <span className="header2">Social Souls</span></h1>
          <p className="description">A dreadfully engaging social platform</p>
        </div>
        <div className="image-container">
    
        </div>
      </div>

      <div className="form-container">
        {/* Checkbox used to toggle forms */}
        <input type="checkbox" id="signup-toggle" />

        <form className="form">
          {/* Login form (Front) */}
          <div className="form_front">
            <div className="form_details">Login</div>
            <input placeholder="Username" className="input" type="text" />
            <input placeholder='Password' className="input" type='password' />
            <button type="button" className="btn">Login</button>
            <span className="switch">
              Don't have an account?
              {/* Using htmlFor to link label to checkbox */}
              <label className="signup_tog" htmlFor="signup-toggle">Sign up</label>
            </span>
          </div>

          {/* Signup form (Back) */}
          <div className="form_back">
            <div className="form_details">SignUp</div>
            <input placeholder='Username' className="input" type="text" />
            <input placeholder='Password' className="input" type="password" />
            <input placeholder='Confirm password' className="input" type="password" />
            <button type="button" className="btn">SignUp</button>
            <span className="switch">
              Already have an account?
              {/* Using htmlFor to link label to checkbox */}
              <label className="signup_tog" htmlFor="signup-toggle">Login</label>
            </span>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
