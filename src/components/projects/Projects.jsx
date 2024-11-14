import React from 'react';
import Card from '../Card/Card.jsx';
import './Projects.css';

const Projects = () => {
  const projects = [
    { title: 'Focus Fit', description: 'The best dang Study and Exercise Timer out there.', link: 'https://focusfitapp.netlify.app' },
    { title: 'Project Two', description: 'This is the second project.', link: '#' },
    { title: 'Project Three', description: 'This is the third project.', link: '#' }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a href={project.link}>
            <Card
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;