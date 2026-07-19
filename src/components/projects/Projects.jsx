import React from 'react';
import Card from '../Card/Card.jsx';
import './Projects.css';
import focusFitImage from '../../focus-fit.png';
// import spockRockImage from '../../spock-rock.png';
// import mazeImage from '../../maze-shot.png';
import travlrImage from '../../Travlr-Express-shot.png';
import pongImage from '../../pong-shot.png';
import dogVisionImage from '../../dog-vision.png';
import heartDiseaseImage from '../../heart-disease.png';
import sentimentImage from '../../sentiment-image.png';
import mealPlannerImage from '../../meal-planner.png';
import aiFinanceImage from '../../ai-finance-shot.png';

const Projects = () => {
  const fullStackProjects = [ 
    {
      title: 'Travlr Express',
      description: 'A full-stack travel booking customer-facing app built with JavaScript, Node.js, Express, and MongoDB, featuring dynamic itineraries on the Travel page pulled from a MongoDB Atlas database. Admin dashboard SPA built with Angular to follow.',
      link: 'https://mean-travlr.onrender.com/',
      imageUrl: travlrImage,
      bgColor: '#1e293b',
      tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Travlr Admin Dashboard',
      description: 'The Angular SPA admin dashboard for Travlr Express, featuring trips management, with a live MongoDB Atlas database and demo. Be careful when toying with it, please! Currently being tested for production and operationalization.',
      bgColor: '#1e293b',
      tags: ['Angular', 'Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Focus Fit',
      description: 'A full-stack productivity platform built with React and Supabase, featuring authorization and user management.',
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
      title: 'AI Sommelier Agent',
      description: 'Fine-tuned language model for wine recommendation and pairing suggestions.',
      bgColor: '#1e293b',
      tags: ['Python', 'LLMs', 'NLP', 'Recommendation Systems']
    },
    {
      title: 'AI JokeBot with LangGraph',
      description: 'A joke-generation agent built with LangGraph, showcasing prompt design and reliability in AI interactions.',
      bgColor: '#0f3d3e',
      tags: ['Python', 'LLMs', 'NLP', 'Agent Design']
    }
  ];

  const mlDemos = [
    {
      title: 'AI Daily Meal Planner',
      description: 'A daily meal planning application that uses Generative AI to suggest recipes based on user-supplied ingredients, and generate an image for each recipe.',
      bgColor: '#166534',
      link: 'https://huggingface.co/spaces/navesm95/meal-planner',
      imageUrl: mealPlannerImage,
      tags: ['Generative AI', 'Recipe Generation', 'Natural Language Processing', 'Image Generation']
    },
    {
      title: 'Generative AI Finance Application Demo',
      description: 'A demo of a generative AI application that provides financial insights and recommendations based on user input of stock tickers and financial data.',
      bgColor: '#475569',
      link: '',
      imageUrl: aiFinanceImage,
      tags: ['Python', 'NLP', 'Streamlit']
    },
    {
      title: 'Customer Sentiment Analyzer',
      description: 'Interactive demo of a sentiment analysis model that classifies customer feedback as positive, negative. Batch analysis of CSV files of reviews with visualizations of sentiment distribiution is also in development.',
      bgColor: '#7f1d1d',
      link: 'https://huggingface.co/spaces/navesm95/sentiment-analyzer',
      imageUrl: sentimentImage,
      tags: ['Python', 'NLP', 'Transformers', 'Streamlit']
    }
  ];

  const dataScienceProjects = [
    {
      title: 'Dog Vision',
      description: 'A TensorFlow/Keras image classifier that identifies dog breeds from uploaded photos.',
      bgColor: '#0f3e23',
      link: 'https://github.com/navesm/dog-vision/blob/main/dog_vision.ipynb',
      imageUrl: dogVisionImage,
      tags: ['TensorFlow', 'Computer Vision']
    },
    {
      title: 'Heart Disease Classification',
      description: 'A machine learning model that predicts the likelihood of heart disease based on patient data.',
      bgColor: '#a31306',
      link: 'https://github.com/navesm/heart-disease-classification/blob/main/heart_disease_classification.ipynb',
      imageUrl: heartDiseaseImage,
      tags: ['Python', 'Scikit-learn', 'Data Analysis']
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

      <div className="project-section">
        <h3>Data Science</h3>
        <div className="projects-grid">
          {dataScienceProjects.map((project, index) => (
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