import React, { useEffect } from "react";
import WeatherImg from "../Assets/Weather.png";
import ScrollToTop from "../sections/ScrollToTop";
import EtchASketch from "../Assets/EtchASketch.png";
import CalcApp from "../Assets/CalcApp.png";
import LibraryStorage from "../Assets/LibraryStorage.png";
import TicTacToe from "../Assets/TicTacToe.png";
import CvResumeBuilder from "../Assets/CvResumeBuilder.png";

export default function Projects() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const projects = [
		{
			title: "Cv Builder",
			description:
				"A powerful CV builder designed specifically for software developers.",
			image: CvResumeBuilder,
			demoLink: "https://resume-cv-app.onrender.com/",
			githubLink: "https://github.com/alanzhang03/Resume-CV-App",
		},
		{
			title: "Tic-Tac-Toe",
			description:
				"Tic Tac Toe game, played against an AI (using minimax algorithm) or another player.",
			image: TicTacToe,
			demoLink: "https://alantictactoe.onrender.com/",
			githubLink: "https://github.com/alanzhang03/tictactoe",
		},

		{
			title: "Weather Tracker",
			description:
				"A weather app tracker that can retrieve weather statistics for a given city.",
			image: WeatherImg,
			demoLink: "https://weatherapp-7fu2.onrender.com/",
			githubLink: "https://github.com/alanzhang03/weather-app",
		},

		{
			title: "Calculator App",
			description: "Calculator application",
			image: CalcApp,
			demoLink: "https://alancalculator.onrender.com/",
			githubLink: "https://github.com/alanzhang03/calculator",
		},
		{
			title: "Etch-a-Sketch",
			description:
				"An application which performs similarly to an etch-a-sketch",
			image: EtchASketch,
			demoLink: "https://alanetchasketch.onrender.com/",
			githubLink: "https://github.com/alanzhang03/Etch-a-Sketch",
		},
		{
			title: "Library Storage App",
			description: "A library storage app, saved on your local device",
			image: LibraryStorage,
			demoLink: "https://library-storage-app.onrender.com/",
			githubLink: "https://github.com/alanzhang03/Library",
		},
	];

	return (
		<>
			<ScrollToTop></ScrollToTop>
			<div className="resume-header">Projects</div>

			<div className="projects-container">
				<div className="projects-grid">
					{projects.map((project, index) => (
						<div className="project-card" key={index}>
							<img
								src={project.image}
								alt={project.title}
								className="project-image"
							/>
							<h3 className="project-title">{project.title}</h3>
							<p className="project-description">{project.description}</p>
							<div className="project-actions">
								<a
									href={project.demoLink}
									className="button"
									target="_blank"
									rel="noopener noreferrer"
								>
									View Project
								</a>
								<a
									href={project.githubLink}
									className="button"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
			<p className="more-project-description">More Coming soon!</p>
		</>
	);
}
