import React from 'react';
import Card from '../Card/Card.jsx';

const Projects = () => {
  const projects = [
    { title: 'Focus Fit', description: 'The best dang Study and Exercise Timer out there.', link: 'https://focusfitapp.netlify.app' },
    { title: 'Project One', description: 'This is the first project.', link: '#' },
    { title: 'Project One', description: 'This is the first project.', link: '#' }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;