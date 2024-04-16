import './sections.css';
import { Link } from 'react-router-dom';
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export default function AboutMe() {
    return (
            <>
            <h1 className='header'>
                <div className='add-padding-header'>
                About me!
                </div>
            </h1>

            {/*1st paragraph*/}
            <p className='about-me-description'>
            Originally from the 

            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.google.com/search?q=chesterbrook+pennsylvania&rlz=1C1CHBF_enUS1035US1035&oq=chesterbrook+penn&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIQCAUQLhivARjHARiABBiOBTIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQg1MDI2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8' 
            > Philadelphia suburbs (Chesterbrook, PA)</a>,
             
            I discovered my passion for software development during high school, where I learned 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.python.org/' 
            > Python </a>
            and
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.java.com/en/' 
            > Java. </a> 
            Now at the 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.cs.umd.edu/' 
            > University Of Maryland, College Park, </a> 
            I am pursuing a 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.cs.umd.edu/' 
            > Computer Science </a> 
            degree and am particularly interested in the fields of 

            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://planetterp.com/course/CMSC421' 
            > AI, </a> 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://planetterp.com/course/CMSC422' 
            > Machine Learning, </a>
            and 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.geeksforgeeks.org/web-development/' 
            > Web Development</a>
            (using technologies like 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://react.dev/' 
            > React </a> 
            and 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://nodejs.org/en' 
            > Node.js</a>). 
            
            As I approach graduation in May 2025,
            I am eager to apply my skills to solve real-world problems and continue learning in the tech industry.
            Feel free to 
            <Link to="/AboutMePage" className='purple-text-description'> read more </Link>
            about me as well as 
            <Link to="/Contact" className='purple-text-description'> contact me </Link> 
            to connect or ask questions!
            <Link to="/AboutMePage">
                <div className='button-container'>
                    <button className='button-to'>
                        <div className='button-text'>
                            Read More!
                            <FaArrowRight className='right-arrow'></FaArrowRight>                 
                        </div>
                    </button>
                </div>
            </Link>
            </p>

            <div className='about-me-footer'>
                <h1 className='about-me-footer-text'>
                    <div className='add-padding'>
                        My Tech Stack!
                    </div>
                </h1>
                <FaArrowDownLong className='arrow-down'></FaArrowDownLong>
            </div>

            </>

    );
}