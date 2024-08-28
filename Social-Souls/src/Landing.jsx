import { useState } from 'react'
import './Landing.css'
import {motion} from "framer-motion"
import logotrans from "./assets/logo_trans.png"





function App() {


  return (
    <>

   <h1 id='header'>Welcome to <h2 class="header2">  Social Souls</h2></h1>
   <div id="header_container">
   <img src={logotrans} alt="logo" width="350x" height="250px"></img>
   </div>

   <p class="description">A dreadfully engaging social platform</p>
   

    </>
  )
}

export default App
