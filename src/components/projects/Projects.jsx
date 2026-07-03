import React from 'react';
import Card from '../Card/Card.jsx';
import './Projects.css';
import focusFitImage from '../../focus-fit.png';
// import spockRockImage from '../../spock-rock.png';
// import mazeImage from '../../maze-shot.png';
import pongImage from '../../pong-shot.png';
import dogVisionImage from '../../dog-vision.png';
import heartDiseaseImage from '../../heart-disease.png';
import sentimentImage from '../../sentiment-image.png';

const Projects = () => {
  const fullStackProjects = [ 
    {
      title: 'Focus Fit',
      description: 'A full-stack productivity platform built with React and Supabase, featuring auth, analytics, and tailored study and exercise plans.',
      link: 'https://focusfitapp.netlify.app',
      bgColor: '#102a43',
      imageUrl: focusFitImage,
      tags: ['React', 'Supabase', 'Auth', 'UX']
    },
    {
      title: 'Pong',
      description: 'A polished browser-based recreation of Pong built with HTML, CSS, and vanilla JavaScript.',
      link: 'https://pong-ppc6.onrender.com/',
      bgColor: '#1d4ed8',
      imageUrl: pongImage,
      tags: ['JavaScript', 'Canvas', 'Game Logic']
    },
    // {
    //   title: 'Maze Pathfinder',
    //   description: 'A visual maze generator and solver that demonstrates BFS and DFS in a clean React experience.',
    //   link: 'https://mazepathfinderalgs.netlify.app',
    //   bgColor: '#334155',
    //   imageUrl: mazeImage,
    //   tags: ['React', 'Algorithms', 'Visualization']
    // },
    // {
    //   title: 'Spock Rock',
    //   description: 'A playful, polished web game that brings classic hand-game logic to life with responsive UI.',
    //   link: 'https://navesm.github.io/spock-rock/',
    //   bgColor: '#0f766e',
    //   imageUrl: spockRockImage,
    //   tags: ['JavaScript', 'DOM', 'UI']
    // }
  ];

  const aiAgentProjects = [
    {
      title: 'AI Agent Workflow Prototypes',
      description: 'Exploring agentic systems, tool use, and automation patterns for practical, user-facing AI assistants.',
      bgColor: '#1e293b',
      tags: ['Python', 'LLMs', 'Automation']
    },
    {
      title: 'Human-in-the-Loop AI Assistants',
      description: 'Designing workflows that combine model reasoning with reliability, evaluation, and clear escalation paths.',
      bgColor: '#0f3d3e',
      tags: ['Prompt Design', 'Reliability', 'Evaluation']
    }
  ];

  const mlDemos = [
    {
      title: 'Dog Vision',
      description: 'A TensorFlow/Keras image classifier that identifies dog breeds from uploaded photos.',
      bgColor: '#166534',
      link: 'https://github.com/navesm/dog-vision/blob/main/dog_vision.ipynb',
      imageUrl: dogVisionImage,
      tags: ['TensorFlow', 'Computer Vision']
    },
    {
      title: 'Movie Sentiment Analyzer',
      description: 'A Hugging Face-style NLP demo for sentiment analysis using text classification and transformer-based ideas.',
      bgColor: '#475569',
      link: 'https://huggingface.co/spaces/navesm95/movie-sentiment-analyzer',
      imageUrl: sentimentImage,
      tags: ['Hugging Face', 'NLP', 'Streamlit']
    },
    {
      title: 'Heart Disease Classification',
      description: 'A binary classifier that predicts heart disease risk from structured health data.',
      bgColor: '#7f1d1d',
      link: 'https://github.com/navesm/heart-disease-classification/blob/master/end-to-end-heart-disease-classification.ipynb',
      imageUrl: heartDiseaseImage,
      tags: ['Scikit-learn', 'Classification', 'ML']
    }
  ];

  return (
    <section className="projects">
      <div className="projects-intro">
        <p className="section-label">Selected work</p>
        <h2>Projects that reflect software engineering, product thinking, and applied AI.</h2>
      </div>

      <div className="project-section">
        <h3>Full-Stack Web Development</h3>
        <div className="projects-grid">
          {fullStackProjects.map((project, index) => (
            <Card
              className="project-card"
              key={`${project.title}-${index}`}
              title={project.title}
              description={project.description}
              link={project.link}
              bgColor={project.bgColor}
              textColor={project.textColor}
              image={project.imageUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>

      <div className="project-section">
        <h3>AI Agents</h3>
        <div className="projects-grid">
          {aiAgentProjects.map((project, index) => (
            <Card
              className="project-card"
              key={`${project.title}-${index}`}
              title={project.title}
              description={project.description}
              link={project.link}
              bgColor={project.bgColor}
              textColor={project.textColor}
              tags={project.tags}
            />
          ))}
        </div>
      </div>

      <div className="project-section">
        <h3>AI/ML Demos</h3>
        <div className="projects-grid">
          {mlDemos.map((project, index) => (
            <Card
              className="project-card"
              key={`${project.title}-${index}`}
              title={project.title}
              description={project.description}
              link={project.link}
              bgColor={project.bgColor}
              textColor={project.textColor}
              image={project.imageUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;