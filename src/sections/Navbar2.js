import { useRef } from "react";
import './sections.css'
import ScrollToTop from "./ScrollToTop";

export default function Navbar2(){
    const AboutMe = useRef(null);
    const Contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <>
        <ScrollToTop></ScrollToTop>
        <div class="Nav2">
            <ul2>
                <li2 onClick ={() => scrollToSection(AboutMe)}className="link">About Me</li2>
                <li2 onClick ={() => scrollToSection(Contact)}className="link">Contact</li2>
            </ul2>
        </div>

        <div ref ={AboutMe}className="AboutMe">
            <h3>About Me</h3>
        </div>

        <div ref ={Contact}className="Contact">
            <h3>Contact</h3>
        </div>
        </>
    )  
}