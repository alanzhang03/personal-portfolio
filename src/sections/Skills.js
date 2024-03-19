import React from 'react';
import './sections.css';
import JsIcon from '../Assets/js.svg';
import PythonIcon from '../Assets/python.svg'
import CIcon from '../Assets/c.svg'
import HtmlIcon from '../Assets/html.svg'
import CssIcon from '../Assets/css.svg'
import OcamlIcon from '../Assets/ocaml.svg'
import JavaIcon from '../Assets/java.svg'
import RIcon from '../Assets/r.svg'
import MatlabIcon from '../Assets/matlab.svg'
import ReactIcon from '../Assets/react.svg'
import RustIcon from '../Assets/rust.svg'
import DjangoIcon from '../Assets/django.svg'
import GithubIcon from '../Assets/github.svg'
import OfficeIcon from '../Assets/office.svg'


export default function Skills() {
    const skills = [    
        { name: 'JavaScript', icon: JsIcon },
        { name: 'Html', icon: HtmlIcon },
        { name: 'Css', icon: CssIcon },
        { name: 'Python', icon: PythonIcon},
        { name: 'C', icon: CIcon },
        { name: 'Ocaml', icon: OcamlIcon },
        { name: 'Java', icon: JavaIcon },
        { name: 'R', icon: RIcon },
        { name: 'Matlab', icon: MatlabIcon},
        { name: 'Rust', icon: RustIcon},


    ];

    const technologies = [
        { name: 'React', icon: ReactIcon },
        { name: 'Django', icon: DjangoIcon },
        { name: 'Github', icon: GithubIcon},
        { name: 'Microsoft Office', icon: OfficeIcon},

    ];

    return (
        <div className="Skills">
            <h1 className="intro-header">
                <span className="purple-text">Programming Languages</span>
            </h1>
            <div className="skills-grid">
                {skills.map(skill => (
                    <div className="skill-item" key={skill.name}>
                        <img src={skill.icon} alt={skill.name} />
                        <p className='skill-name'>{skill.name}</p>
                    </div>
                    
                ))}
            </div>
            <h1 className="intro-header">
                <span className="purple-text">Technologies</span>
            </h1>
            <div className="technologies-grid">
                {technologies.map(tech => (
                    <div className="technology-item" key={tech.name}>
                        <img src={tech.icon} alt={tech.name} />
                        <p className='tech-name'>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}