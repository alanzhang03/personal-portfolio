import { useRef } from "react";
import "./sections.css";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Contact";
import Skills from "./Skills";

export default function Navbar2() {
	const technologiesRef = useRef(null);
	const skillsRef = useRef(null);

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		<>
			<ScrollToTop />
			<div className="Nav2">
				<ul>
					<li onClick={() => scrollToSection(skillsRef)} className="link">
						<i className="fa-solid fa-circle"></i>
					</li>
					<li onClick={() => scrollToSection(technologiesRef)} className="link">
						<i className="fa-solid fa-circle"></i>
					</li>
				</ul>
			</div>

			<div ref={skillsRef} className="Skills">
				<Skills />
			</div>

			<div ref={technologiesRef} className="Contact">
				<Contact />
			</div>
		</>
	);
}
