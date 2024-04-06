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

            
            <p className='about-me-description'>
            Originally from the outskirts of 
            <a target="_blank" rel='noreferrer' className='purple-text-description'
            href='https://www.google.com/maps/place/Philadelphia,+PA/@40.0026443,-75.2828353,11z/data=!3m1!4b1!4m6!3m5!1s0x89c6b7d8d4b54beb:0x89f514d88c3e58c1!8m2!3d39.9525839!4d-75.1652215!16zL20vMGRjbGc?entry=ttu' 
            > Philadelphia, PA</a>, 
            I attended Conestoga High School located in Berwyn, Pennsylvania.
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
            a field I first explored in the summer of 2023. I was especially interested in what the process was 
            like, creating an eye catching and responsive page as well as some of the core features 
            behind how these websites were deployed and running in the background. This led to my interest
            in learning about technologies like React and Nodejs, which I decided to use to build this Web Portfolio.
            <br></br><br></br>

            As I approach the end of my academic journey, I am excited and hopeful to apply the skills and knowledge
            I have gained thus far to solve real-world problems. I am particularly excited about the opportunitites 
            to take on new challenges, meet new people, and use new technologies. I am always seeking to contribute
            to meaningful projects and expand upon my current skill set through continuous learning and collaboration,
            and am excited for whats to come
            <br></br><br></br>

            If you have any further questions or would just like to say hello, feel free to navigate to the contact 
            page of this portfolio and shoot me a message!
            </p> 
            
            <div>
                <h1 className='about-me-footer'>My Tech Stack!</h1>
                <FaArrowDownLong className='arrow-down'></FaArrowDownLong>
            </div>
        </>
    )
}