import './sections.css';
import { FaArrowDownLong } from "react-icons/fa6";

export default function AboutMe() {
    return (
        <>
        <div>
            <h1 className='intro-header'>
            Hi, I'm <span className='purple-text'>Alan</span>, 
            a dedicated full-stack
            <span className='purple-text'>  web developer!</span>

            </h1>

            <p className='about-me-description'>
            Originally from the outskirts of <span className='purple-text-description'>Philadelphia, Pennsylvania</span>, 
            I attended Conestoga High School located in Berwyn, Pennsylvania and am now currently attending the 
            <span className='purple-text-description'> University of Maryland, College Park</span>, 
            on track to graduate in <span className='purple-text-description'> May 2025</span>. 
            <br></br><br></br>

            I began my software development journey in Python through an AP course offered at my Highschool called 
            "AP Computer Science Principles" and later branched out into java through the course "AP Computer Science A"
            , both of which I thoroughly enjoyed.
            <br></br><br></br>

            Outside of programming, I enjoy watching and playing soccer and 
            Just as much as I take pleasure in a thrilling match or engaging gameplay session, I equally savor 
            the journey of learning on platforms like <span className='purple-text-description'>YouTube</span>. 
            <br></br><br></br>

            As I navigate through my education at the <span className='purple-text-description'>University of Maryland</span>, 
            I'm always looking for the next <span className='purple-text-description'>challenge </span>  to tackle or 
            problem to solve. Each project is an opportunity to showcase my <span className='purple-text-description'> creativity and innovative mind</span>. Every 
            line of code is a step towards the future in which 
            I am <span className='purple-text-description'> eager </span> to help build.
            </p> 
            <br></br><br></br>

            <div className='about-me-footer'>
                <h1 className='about-me-header'>My Tech Stack!</h1>
            <FaArrowDownLong className='arrow-down'></FaArrowDownLong>
      </div>

        </div> 
        </>
    )
}