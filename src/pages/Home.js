import React from 'react';
import Navbar2 from "../sections/Navbar2";
import MainPic from "../Assets/MainPic.png";
import Typewriter from "../sections/Typewriter";
import './pages.css';

export default function Home() {
  const roles = ["Full Stack Developer", "", "Backend Developer"]; 

  return (
    <>
      <body>
        <div className="flex-container">
          <div className="typewriter-effect">
            <p className='intro-header'> Welcome to <br></br>
            <span className="purple-text">Alan Zhang's</span><br></br>
            Web Portfolio!     
            </p>
            

            <div className='testing'>
              <Typewriter textArray={roles} typingDelay={100} backspaceDelay={100} />
              <span className="typewriter-cursor">|</span>
            </div>

            
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