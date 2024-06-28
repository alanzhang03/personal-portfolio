import React, { useEffect } from "react";
import Navbar2 from "../sections/Navbar2";
import MainPic from "../Assets/MainPic.png";
import Typewriter from "../sections/Typewriter";
import { FaArrowDownLong } from "react-icons/fa6";
import { PiHandWaving } from "react-icons/pi";
import "./pages.css";

export default function Home() {
	const roles = [
		"Full-Stack Developer",
		"React Expert",
		"Soccer Fanatic",
		"Avid Learner",
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="home-container">
				<div className="typewriter-effect">
					<div className="intro-header">
						{" "}
						Welcome to my Portfolio!<br></br>
						<p>
							I'm <span className="purple-text">Alan Zhang </span>
							<PiHandWaving className="wave-hand"></PiHandWaving>
						</p>
					</div>
					<div className="typing">
						<Typewriter
							textArray={roles}
							typingDelay={100}
							backspaceDelay={100}
						/>
						<span className="typewriter-cursor">|</span>
					</div>
				</div>
				<div>
					<img className="MainPic" src={MainPic} alt="MainPic"></img>
				</div>
			</div>

			<div className="about-me-footer">
				<h1 className="about-me-footer-text">
					<div className="add-padding">My Tech Stack!</div>
				</h1>
				<FaArrowDownLong className="arrow-down"></FaArrowDownLong>
			</div>

			<Navbar2></Navbar2>
		</>
	);
}
