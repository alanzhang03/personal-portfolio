import React from 'react';
import './sections.css';
import JsIcon from '../Assets/js.svg';
import PythonIcon from '../Assets/python.svg'
import CIcon from '../Assets/c.svg'


export default function Skills() {
    const skills = [
        
        { name: 'JavaScript', icon: JsIcon },
        { name: 'Python', icon: PythonIcon},
        { name: 'C', icon: CIcon },
        
    


    ];

    const technologies = [
        { name: 'React', icon: 'path-to-react-icon' },
        { name: 'Node.js', icon: 'path-to-nodejs-icon' },

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
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}