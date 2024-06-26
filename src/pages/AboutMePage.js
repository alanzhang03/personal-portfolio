import React, { useEffect } from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ScrollToTop from "../sections/ScrollToTop";
import ContributionsHeatmap from "../pages/ContributionsHeatmap";
import "../sections/sections.css";
import "./ContributionsHeatmap.css";

export default function AboutMePage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<ScrollToTop></ScrollToTop>
			<div className="AboutMePage">
				<h1 className="header">
					About Me					
				</h1>

				{/*1st paragraph*/}
				<p className="about-me-description">
					Originally from the outskirts of
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://www.google.com/maps/place/Philadelphia,+PA/@40.0026443,-75.2828353,11z/data=!3m1!4b1!4m6!3m5!1s0x89c6b7d8d4b54beb:0x89f514d88c3e58c1!8m2!3d39.9525839!4d-75.1652215!16zL20vMGRjbGc?entry=ttu"
					>
						{" "}
						Philadelphia
					</a>
					, I attended
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://www.usnews.com/education/best-high-schools/pennsylvania/districts/tredyffrin-easttown-school-district/conestoga-high-school-17378"
					>
						{" "}
						Conestoga High School{" "}
					</a>
					located in Berwyn, Pennsylvania. I began my software development
					journey with
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://www.python.org/"
					>
						{" "}
						Python{" "}
					</a>
					in a high school course titled
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles/course"
					>
						{" "}
						AP Computer Science Principles
					</a>
					. This initial experience ignited my passion for Computer Science,
					leading me to register for the course
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://apstudents.collegeboard.org/courses/ap-computer-science-a"
					>
						{" "}
						AP Computer Science A{" "}
					</a>
					the next year, where I learned
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://www.java.com/en/"
					>
						{" "}
						Java.{" "}
					</a>
					I found both courses immensely enjoyable, thus leading to my decision
					to study
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://www.cs.umd.edu/"
					>
						{" "}
						Computer Science at the University of Maryland, College Park.
					</a>
				</p>

				{/*2nd paragraph*/}
				<p className="about-me-description">
					Currently in College, I am on track to graduate in May 2025. I have
					taken classes which have covered fundamental concepts such as
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://planetterp.com/course/CMSC351"
					>
						{" "}
						Algorithms,{" "}
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://planetterp.com/course/CMSC132"
					>
						{" "}
						OOP,{" "}
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://planetterp.com/course/CMSC250"
					>
						{" "}
						Discrete Structures,{" "}
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://planetterp.com/course/CMSC216"
					>
						{" "}
						Operating Systems,{" "}
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://planetterp.com/course/CMSC216"
					>
						{" "}
						Memory Management{" "}
					</a>{" "}
					and
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://planetterp.com/course/CMSC351"
					>
						{" "}
						Time Complexity Analysis{" "}
					</a>{" "}
					among others. Looking ahead, I am excited to expand my skillset in
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://planetterp.com/course/CMSC421"
					>
						{" "}
						AI,{" "}
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://planetterp.com/course/CMSC422"
					>
						{" "}
						Machine Learning,{" "}
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://planetterp.com/course/CMSC430"
					>
						{" "}
						Compilers,{" "}
					</a>{" "}
					and programming with
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://planetterp.com/course/CMSC436"
					>
						{" "}
						Handheld Systems{" "}
					</a>{" "}
					in the near future.
				</p>

				<div className="centered-section">
					<h1 className="header">
						Web Development
						<br></br>
					</h1>
				</div>
				{/*3rd paragraph*/}
				<p className="about-me-description">
					Throughout my software development journey thus far, I have been
					particularly interested in
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://www.geeksforgeeks.org/web-development/"
					>
						{" "}
						web development
					</a>
					, a field I first explored in the summer of 2023. I was especially
					interested in what the process was like, creating an
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://www.geeksforgeeks.org/web-development/#front_dev"
					>
						{" "}
						eye-catching and responsive{" "}
					</a>{" "}
					page as well as some of the core features behind how these websites
					were
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://www.geeksforgeeks.org/web-development/#back_dev"
					>
						{" "}
						deployed and running in the background.{" "}
					</a>{" "}
					This led to my interest in learning about technologies like
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://react.dev/"
					>
						{" "}
						React{" "}
					</a>{" "}
					and
					<a
						target="_blank"
						rel="noreferrer"
						className="purple-text-description"
						href="https://nodejs.org/en"
					>
						{" "}
						Node.js,{" "}
					</a>{" "}
					which I decided to use to build this
					<Link to="/Home" className="purple-text-description">
						{" "}
						web portfolio{" "}
					</Link>
				</p>
				{/*5th paragraph*/}
				<p className="about-me-description">
					If you have any further questions or even if you would just like to
					say hello, feel free to navigate to the
					<Link to="/Contact" className="purple-text-description">
						{" "}
						contact page{" "}
					</Link>
					of this
					<Link to="/Home" className="purple-text-description">
						{" "}
						portfolio{" "}
					</Link>
					and shoot me a message!
				</p>
				<Link to="/Contact">
					<div className="button-container">
						<button className="button-to">
							<div className="button-text">
								Contact me!
								<FaArrowRight className="right-arrow"></FaArrowRight>
							</div>
						</button>
					</div>
				</Link>
			</div>
			{/* Heatmap Section */}
			<ContributionsHeatmap />
		</>
	);
}
