import React from 'react';
import Navbar2 from "../sections/Navbar2";
import MainPic from "../Assets/MainPic.png";
import Typewriter from "../sections/Typewriter";
import { FaArrowDownLong } from "react-icons/fa6";
import { PiHandWaving } from "react-icons/pi";
import './pages.css';




export default function Home() {
  const roles = ["Full Stack Developer", "Avid Gamer", "Soccer Enthusiast ⚽"];

  return (
    <>
      <body> 
        <div className="home-container">
          <div className="typewriter-effect">
            <p className='intro-header'> Welcome to my Portfolio!<br></br>
            <p>I am <span className="purple-text">Alan Zhang </span><PiHandWaving className='wave-hand'></PiHandWaving></p>
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