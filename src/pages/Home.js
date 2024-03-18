import React from 'react';
import Navbar2 from "../sections/Navbar2";
import MainPic from "../Assets/MainPic.png";
import Typewriter from "../sections/Typewriter";
import { FaArrowDownLong } from "react-icons/fa6";
import { PiHandWaving } from "react-icons/pi";
import './pages.css';


export default function Home() {
  const roles = ["Full Stack Developer", "", "Backend Developer"]; 

  return (
    <>
      <body>
        
        <div className="flex-container">
          <div className="typewriter-effect">
            <p className='intro-header'> Full Stack Developer<br></br>
            <span className="purple-text">Alan Zhang's</span><br></br>
            Web Portfolio!<PiHandWaving className='wave-hand'></PiHandWaving>
            </p>
            <div className='typing'>
              <Typewriter textArray={roles} typingDelay={100} backspaceDelay={100} />
              <span className="typewriter-cursor">|</span>
            </div>  
          </div>

          <div>
            <img className="MainPic" src={MainPic} alt="MainPic"></img>
          </div>
        </div>
      </body>

      <div className='about-me-footer'>
        <h1 className='header'>More about me!</h1>
        <FaArrowDownLong className='arrow-down'></FaArrowDownLong>
      </div>


      <Navbar2></Navbar2>
    </>
  );
}