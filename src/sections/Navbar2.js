import { useRef } from "react";
import './sections.css';
import ScrollToTop from "./ScrollToTop";
import AboutMe from "./AboutMe"; 
import Contact from "./Contact";
import Projects from "./Projects";

export default function Navbar2() {
    const aboutMeRef = useRef(null); 
    const contactRef = useRef(null);
    const projectsRef = useRef(null);

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
                    <li2 onClick={() => scrollToSection(aboutMeRef)} className="link">About me</li2>
                    <li2 onClick={() => scrollToSection(projectsRef)} className="link">Projects</li2>
                    <li2 onClick={() => scrollToSection(contactRef)} className="link">Contact</li2>
                </ul2>
            </div>
            <div ref={aboutMeRef} className="AboutMe">
                <AboutMe />
            </div>

            <div ref={projectsRef} className="Projects">
                <Projects />
            </div>

            <div ref={contactRef} className="Contact">
                <Contact />
            </div>

        </>
    );  
}