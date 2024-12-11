import React from 'react';
import Card from '../Card/Card.jsx';
import './Projects.css';
import focusFitImage from '../../focus-fit.png';
import youkanImage from '../../youkan-flow.png';
import spockRockImage from '../../spock-rock.png';

const Projects = () => {
  const projects = [
    { title: 'Focus Fit', description: ' React | Supabase. The best dang exercise and study timer out there', link: 'https://focusfitapp.netlify.app', bgColor: "darkblue", imageUrl: focusFitImage },
    { title: 'YouKanDoIt TaskBoard', description: 'A personal Kanban board for all your productivity needs.', link: 'https://youkanflow.netlify.app/', bgColor: '#333', imageUrl: youkanImage },
    { title: 'Spock Rock', description: 'Play versus the computer in Rock, Paper, Scissors, Lizard, Spock!', link: 'https://navesm.github.io/spock-rock/', bgColor: '#049C67', imageUrl: spockRockImage }
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