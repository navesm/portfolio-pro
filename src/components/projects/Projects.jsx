import React from 'react';
import Card from '../Card/Card.jsx';
import './Projects.css';
import focusFitImage from '../../focus-fit.png';

const Projects = () => {
  const projects = [
    { title: 'Focus Fit', description: ' React | Supabase. The best dang exercise and study timer out there', link: 'https://focusfitapp.netlify.app', bgColor: "mediumblue", imageUrl: focusFitImage },
    { title: 'Project Two', description: 'This is the second project.', link: '#', bgColor: '#333' },
    { title: 'Project Three', description: 'This is the third project.', link: '#', bgColor: 'green' },
    { title: 'Project Four', description: 'This is the fourth project.', link: '#', bgColor: 'rebeccapurple' }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
              className="project-card"
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              bgColor={project.bgColor}
              textColor={project.textColor}
              image={project.imageUrl}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;