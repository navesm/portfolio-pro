import React from 'react';
import Card from '../Card/Card.jsx';
import './Projects.css';

const Projects = () => {
  const projects = [
    { title: 'Focus Fit', description: ' React | Supabase. The best dang exercise and study timer out there', link: 'https://focusfitapp.netlify.app', bgColor: "mediumblue" },
    { title: 'Project Two', description: 'This is the second project.', link: '#', bgColor: '#333' },
    { title: 'Project Three', description: 'This is the third project.', link: '#', bgColor: 'green' }
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
              bgColor={project.bgColor}
              textColor={project.textColor}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;