import { useRef } from "react";
import './sections.css';
import ScrollToTop from "./ScrollToTop";
import AboutMe from "./AboutMe"; 
import Contact from "./Contact";
import Skills from "./Skills";
import StarField from "../pages/StarField";


export default function Navbar2() {
    const aboutMeRef = useRef(null); 
    const contactRef = useRef(null);
    const skillsRef = useRef(null);
    

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <ScrollToTop />
            <div className="Nav2">
                <ul2>
                    <li2 onClick={() => scrollToSection(skillsRef)} className="link">
                        <i class="fa-solid fa-circle"></i>
                    </li2>
                    <li2 onClick={() => scrollToSection(contactRef)} className="link">
                        <i class="fa-solid fa-circle"></i>
                    </li2>
                </ul2>
            </div>


            <div ref={skillsRef} className="Skills">
                <Skills />
            </div>

            <div ref={contactRef} className="Contact">
                <Contact />
            </div>
        </>
    );  
}