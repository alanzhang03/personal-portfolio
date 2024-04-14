
import React, {useEffect} from 'react';
import WeatherImg from "../Assets/Weather.png"


export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const projects = [
    {
      title: "Weather Tracker",
      description: "A weather app tracker that can retrieve weather statistics for a given city.",
      image: WeatherImg,
      demoLink: "https://weatherapp-7fu2.onrender.com/",
      githubLink: "https://github.com/alanzhang03/weather-app"
    },

  ];

  return (
    <>
      <h1 className="header">
        Projects
      </h1>
      
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-actions">
                <a href={project.demoLink} className="button" target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.githubLink} className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className='more-project-description'>More Coming soon!</p>
    </>
  );
  
}
