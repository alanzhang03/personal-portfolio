import './sections.css';
import { FaArrowDownLong } from "react-icons/fa6";

export default function AboutMe() {
    return (
        <>
        <div>
            <h1 className='intro-header'>
            Hi, I'm <span className='purple-text'>Alan</span>, 
            a dedicated full-stack
            <span className='purple-text'> Software Developer!</span>

            </h1>

            <p className='about-me-description'>
            Originally from the outskirts of <span className='purple-text-description'>Philadelphia, Pennsylvania</span>, 
            I attended Conestoga High School located in Berwyn, Pennsylvania and am now currently attending the 
            <span className='purple-text-description'> University of Maryland, College Park</span>, 
            on track to graduate in <span className='purple-text-description'> May 2025</span>. 
            <br></br><br></br>

            I began my software development journey in Python through an AP course offered at my Highschool called 
            "AP Computer Science Principles" and later branched out into java through the course "AP Computer Science A"
            , both of which I thoroughly enjoyed, sparking my initial love for Computer Science.
            <br></br><br></br>

            Currently in College, I am pursuing a bachelores degree in Computer Science at the University of Maryland,
            College Park, on track to graduate in May 2025. I have taken classes which included core conecepts 
            such as Alorithms, OOP, Operating Systems, Memory Management and Time Complexity Analysis just to name 
            a few. I plan on taking courses on AI and Machine Learning, Compilers, and programming with Handheld 
            Systems in the near future.
            <br></br><br></br>

            Throughout my software development journey thus far, I was particularlly interested in web development
            which I first discovered over the Summer of 2023. I was especially interested in what the process was 
            like, creating an eye catching and responsive page (front end) as well as some of the core features 
            behind how these websites were deployed and running in the background (backend). This led to my interest
            in learning about technologies like React and Nodejs, which I decided to use to build this Web Portfolio.
            <br></br><br></br>

            

            Outside of programming, I enjoy watching and playing soccer, working out and spending time with my friends.
            I also dabble in
            <br></br><br></br>



            </p> 


            <div className='about-me-footer'>
                <h1 className='about-me-header'>My Tech Stack!</h1>
            <FaArrowDownLong className='arrow-down'></FaArrowDownLong>
      </div>

        </div> 
        </>
    )
}