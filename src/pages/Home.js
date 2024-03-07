import React from 'react';
import Navbar2 from "../sections/Navbar2";
import MainPic from "../Assets/MainPic.png";
import Typewriter from "../sections/Typewriter";
import './pages.css';

export default function Home() {
  const roles = ["Full Stack Developer", "", "Backend Developer"]; 

  return (
    <>
      <center>
        <h1 className='header'>Alan's React portfolio</h1>
      </center>
      <body>
        
        <div className="flex-container">

        
          <div className="typewriter-effect">
            <p className='description'> Hi my name is <br></br><span className="purple-text">Alan Zhang</span></p>
            <Typewriter textArray={roles} typingDelay={100} backspaceDelay={100} />
          </div>

          <div>
            <img className="MainPic" src={MainPic} alt="MainPic"></img>
          </div>
        </div>
      </body>

      <Navbar2></Navbar2>
    </>
  );
}