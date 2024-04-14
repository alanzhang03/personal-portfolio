import './sections.css';
import { Link } from 'react-router-dom';
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export default function AboutMe() {
    return (
            <>
            <h1 className='about-me-header'>
                <div className='purple-text'>
                    About me!
                </div>
            </h1>

            {/*1st paragraph*/}
            <p className='about-me-description'>
            Originally from the Philadelphia suburbs, I discovered my passion for software development during high school in
            Berwyn, Pennsylvania,
            where I learned 
            Python
            and
            Java.
            Now at the 
            University of Maryland,
            I am pursuing a Computer science degree and am particularly interested in the fields of AI, Machine Learning,
            and web development (using technologies like React and Node.JS). As I approach graduation in May 2025,
            I am eager to apply my skills to solve real-world problems and continue learning in the tech industry.
            Feel free to read more about me by clicking the button below, as well as contacting me here to connect or
            ask questions!
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