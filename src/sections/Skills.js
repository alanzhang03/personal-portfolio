import React from "react";
import "./sections.css";
import JsIcon from "../Assets/js.svg";
import PythonIcon from "../Assets/python.svg";
import CIcon from "../Assets/c.svg";
import HtmlIcon from "../Assets/html.svg";
import CssIcon from "../Assets/css.svg";
import OcamlIcon from "../Assets/ocaml.svg";
import JavaIcon from "../Assets/java.svg";
import RIcon from "../Assets/r.svg";
import MatlabIcon from "../Assets/matlab.svg";
import ReactIcon from "../Assets/react.svg";
import DjangoIcon from "../Assets/django.svg";
import GithubIcon from "../Assets/github.svg";
import OfficeIcon from "../Assets/office.svg";
import NodejsIcon from "../Assets/nodejs.svg";
import CSharpIcon from "../Assets/csharp.svg";
import gitIcon from "../Assets/git.svg";
import viteIcon from "../Assets/vitejs.svg";
import vueIcon from "../Assets/vue.svg";
import webpackIcon from "../Assets/webpack.svg";

export default function Skills() {
	const skills = [
		{ name: "JavaScript", icon: JsIcon },
		{ name: "Html", icon: HtmlIcon },
		{ name: "Css", icon: CssIcon },
		{ name: "Python", icon: PythonIcon },
		{ name: "C#", icon: CSharpIcon },
		{ name: "C", icon: CIcon },
		{ name: "Ocaml", icon: OcamlIcon },
		{ name: "Java", icon: JavaIcon },
		{ name: "R", icon: RIcon },
		{ name: "Matlab", icon: MatlabIcon },
	];

	const technologies = [
		{ name: "React", icon: ReactIcon },
		{ name: "Webpack", icon: webpackIcon },
		{ name: "Node", icon: NodejsIcon },
		{ name: "Vite", icon: viteIcon },
		{ name: "Vue", icon: vueIcon },
		{ name: "Django", icon: DjangoIcon },
		{ name: "Github", icon: GithubIcon },
		{ name: "git", icon: gitIcon },
		{ name: "Microsoft Office", icon: OfficeIcon },
	];

	return (
		<div className="Skills">
			<h1 className="header">Programming Languages</h1>
			<div className="skills-grid">
				{skills.map((skill) => (
					<div className="skill-item" key={skill.name}>
						<img src={skill.icon} alt={skill.name} />
						<p className="skill-name">{skill.name}</p>
					</div>
				))}
			</div>
			<h1 className="header">Technologies</h1>
			<div className="technologies-grid">
				{technologies.map((tech) => (
					<div className="technology-item" key={tech.name}>
						<img src={tech.icon} alt={tech.name} />
						<p className="tech-name">{tech.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
