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
  const dataProjects = [
    { title: "Dog Vision", description: "A multi-class classification model created with TensorFlow and Keras", bgColor: "green", link: "https://github.com/navesm/dog-vision/blob/main/dog_vision.ipynb" },
    { title: "Heart Disease Classification", description: "A binary classification model to determine if a patient is likely to have heart disease from structured data", bgColor: "maroon", link: "https://github.com/navesm/heart-disease-classification/blob/master/end-to-end-heart-disease-classification.ipynb" },
  ];

  const schoolProjects = [
    { title: "The Corner Grocer", description: "A sales data analysis tool in C++ for the local Corner Grocer Store", bgColor: "darkblue", link: "https://github.com/navesm/cornerGrocer" },
    { title: "The Game Room: Draw It or Lose It Design Document", description: "An operating platform software design document for The Game Room", bgColor: "#398", link: "https://github.com/navesm/CS230-Software-design-doc" },
    { title: "Scrum Sprint Review and Retrospective for SNHU Travel project", description: "A Scrum Review and Retrospective", bgColor: "#049C67", link: "https://github.com/navesm/CS250-Scrum-docs/blob/master/CS250%20SDLC%20Sprint%20Review%20and%20Retrospective%20-%20Steven%20Nave.docx" },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <h3>Deep Learning Demos</h3>
      <h4>Cat/Dog Classifier</h4>
      {/* <h2>Cat vs Dog Classifier</h2>
      <iframe
        title="cat-dog-classifier"
        src="https://huggingface.co/spaces/navesm95/cat-dog-classifier"
        width="100%"
        height="500px"
        frameborder="0"
        allowfullscreen
      ></iframe> */}
      Coming Soon...
      <h4>Movie Sentiment Analyzer</h4>
      {/* <iframe
        title="movie-sentiment-analyzer"
        src="https://huggingface.co/spaces/navesm95/movie-sentiment-analyzer"
        width="100%"
        height="500px"
        frameborder="0"
        allowfullscreen
      ></iframe> */}
      Coming soon...
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