import React from 'react';
import Card from '../Card/Card.jsx';
import './Projects.css';
import focusFitImage from '../../focus-fit.png';
import spockRockImage from '../../spock-rock.png';
import mazeImage from '../../maze-shot.png';
import pongImage from '../../pong-shot.png';
import dogVisionImage from '../../dog-vision.png';
import heartDiseaseImage from '../../heart-disease.png';
import sentimentImage from '../../sentiment-image.png';

const Projects = () => {
  const webProjects = [
    { title: 'Focus Fit', description: ' React | Supabase. Full-Stack Web Application with Authentication, Authorization, and personalized statistics for your productivity goals. The best dang exercise and study timer out there.', link: 'https://focusfitapp.netlify.app', bgColor: "darkblue", imageUrl: focusFitImage },
    { title: 'Pong', description: 'HTML, CSS, Vanilla JavaScript utilizing the Canvas and DOM. A reboot of the classic Pong. Multiplayer coming soon!', link: 'https://pong-ppc6.onrender.com/', bgColor: '#3989', imageUrl: pongImage },
    { title: 'BFS/DFS Maze Pathfinder', description: 'React WebApp Deployed with Netlify. A maze generation app that utilizes Breadth-First Search and Depth-First Search to navigate the maze.', link: 'https://mazepathfinderalgs.netlify.app', bgColor: '#333', imageUrl: mazeImage },
    { title: 'Spock Rock', description: 'Vanilla JavaScript Web Game. Play versus the computer in Rock, Paper, Scissors, Lizard, Spock!', link: 'https://navesm.github.io/spock-rock/', bgColor: '#049C50', imageUrl: spockRockImage }
  ];
  const dataProjects = [
    { title: "Dog Vision", description: "A multi-class classification model created with TensorFlow and Keras", bgColor: "green", link: "https://github.com/navesm/dog-vision/blob/main/dog_vision.ipynb", imageUrl: dogVisionImage },
    { title: "Movie Sentiment Analyzer", description: "A text-classification NLP model for sentiment analysis created using FastAI and the LSTM model architecture", bgColor: "slategrey", link: "https://huggingface.co/spaces/navesm95/movie-sentiment-analyzer", imageUrl: sentimentImage },
    { title: "Heart Disease Classification", description: "A binary classification model to determine if a patient is likely to have heart disease from structured data", bgColor: "maroon", link: "https://github.com/navesm/heart-disease-classification/blob/master/end-to-end-heart-disease-classification.ipynb", imageUrl: heartDiseaseImage },
  ];

  const schoolProjects = [
    { title: "CS 320: Software Testing and QA Automation -- Java Contact Service", description: "The barebones Java implementation of a mobile application contact service including functionality for contacts, appointments, and tasks. Complete with JUnit tests and extensible code coverage.", bgColor: "blue", link: "https://github.com/navesm/CS320-Software-Testing-and-QA-Automation-ContactService" },
    { title: "CS 300: Data Structures and Algorithms, Analysis and Design -- Course Search Tool ", description: "A course information and search tool for the CS department at ABC University, written in C++, utilizing a binary search tree", bgColor: "maroon", link: "https://github.com/navesm/CS300---Data-Structures-and-Algorithms---C-" },
    { title: "CS 210: Programming Languages -- The Corner Grocer", description: "A sales data analysis tool in C++ for the local Corner Grocer Store", bgColor: "darkblue", link: "https://github.com/navesm/cornerGrocer" },
  ];

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