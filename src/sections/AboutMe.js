import './sections.css';
import { Link } from 'react-router-dom';
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export default function AboutMe() {
    return (
            <>
            <h1 className='intro-header'>
            Hi, I'm <span className='purple-text'>Alan</span>, 
            a dedicated 
            <br></br>
            <span className='purple-text'> Software Developer!</span>
            </h1>

            {/*1st paragraph*/}
            <p className='about-me-description'>
            Originally from the outskirts of 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.google.com/maps/place/Philadelphia,+PA/@40.0026443,-75.2828353,11z/data=!3m1!4b1!4m6!3m5!1s0x89c6b7d8d4b54beb:0x89f514d88c3e58c1!8m2!3d39.9525839!4d-75.1652215!16zL20vMGRjbGc?entry=ttu' 
            > Philadelphia</a>,
            I attended 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.usnews.com/education/best-high-schools/pennsylvania/districts/tredyffrin-easttown-school-district/conestoga-high-school-17378' 
            > Conestoga High School </a> 
            
            located in Berwyn, Pennsylvania.
            I began my software development journey with 
            
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.python.org/' 
            > Python </a>
            in a high school course titled 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://apcentral.collegeboard.org/courses/ap-computer-science-principles/course' 
            > AP Computer Science Principles </a>.
            This initial experience ignited my passion for Computer Science, leading me to register for the course
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://apstudents.collegeboard.org/courses/ap-computer-science-a' 
            > AP Computer Science A </a> 
            the next year, where I learned 
             
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.java.com/en/' 
            > Java. </a> 
            
            I found both courses immensely enjoyable, thus leading to my 
            decision to study 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.cs.umd.edu/' 
            > Computer Science at the University of Maryland, College Park.</a> 
            <br></br><br></br>

            <Link to="/AboutMePage">
                <div className='button-container'>
                    <button className='button-to-about-me'>
                        <div className='button-text'>
                            Read More!
                            <FaArrowRight className='right-arrow'></FaArrowRight>                 
                        </div>
                    </button>
                </div>
            </Link>

            </p>

            <div>
                <h1 className='about-me-footer'>My Tech Stack!</h1>
                <FaArrowDownLong className='arrow-down'></FaArrowDownLong>
            </div>

            </>

    );
}