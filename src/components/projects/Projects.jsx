import React from 'react';
import Card from '../Card/Card.jsx';
import './Projects.css';
import focusFitImage from '../../focus-fit.png';
import spockRockImage from '../../spock-rock.png';
import calculatorImage from '../../calculator-shot.png';
import pongImage from '../../pong-shot.png';

const Projects = () => {
  const webProjects = [
    { title: 'Focus Fit', description: ' React | Supabase. The best dang exercise and study timer out there', link: 'https://focusfitapp.netlify.app', bgColor: "darkblue", imageUrl: focusFitImage },
    { title: 'Pong', description: 'A reboot of the classic Pong. Multiplayer coming soon!', link: 'https://pong-ppc6.onrender.com/', bgColor: '#398', imageUrl: pongImage },
    { title: 'Scientific Calculator++', description: 'A scientific calculator that features a quadratic equation solver and prime factorization tool!', link: 'https://navesm.github.io/calculator/', bgColor: '#333', imageUrl: calculatorImage },
    { title: 'Spock Rock', description: 'Play versus the computer in Rock, Paper, Scissors, Lizard, Spock!', link: 'https://navesm.github.io/spock-rock/', bgColor: '#049C67', imageUrl: spockRockImage }
  ];
  const dataProjects = [{ title: "Coming Soon", description: "Check back later" }];

  const schoolProjects = [{ title: "Coming Soon", description: "Links incoming!", bgColor: "darkblue" }];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <h3>Web Development</h3>
      <div className="projects-grid">
        {webProjects.map((project, index) => (
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
      <h3>Data Analysis & Machine Learning</h3>
      <div className="projects-grid">
        {dataProjects.map((project, index) => (
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
      <h3>University Projects and Artifacts</h3>
      <div className="projects-grid">
        {schoolProjects.map((project, index) => (
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