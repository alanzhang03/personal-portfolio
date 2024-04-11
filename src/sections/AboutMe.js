import './sections.css';
import { FaArrowDownLong } from "react-icons/fa6";

export default function AboutMe() {
    return (
        <>
            <h1 className='intro-header'>
            Hi, I'm <span className='purple-text'>Alan</span>, 
            a dedicated 
            <br></br>
            <span className='purple-text'> Software Developer!</span>
            </h1>
 
            
            <div>
                <h1 className='about-me-footer'>My Tech Stack!</h1>
                <FaArrowDownLong className='arrow-down'></FaArrowDownLong>
            </div>
        </>
    )
}