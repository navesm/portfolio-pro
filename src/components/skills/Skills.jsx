import React from 'react';
import Card from '../Card/Card.jsx';
import { FaPython, FaJsSquare, FaReact, FaDatabase, FaGitSquare, FaHtml5 } from 'react-icons/fa';
import { SiJupyter, SiTensorflow, SiHuggingface } from 'react-icons/si';
import './Skills.css';
import { FaJava } from 'react-icons/fa6';
import { CgCPlusPlus } from 'react-icons/cg';

function Skills() {
  const skills = [
    { title: 'JavaScript', description: 'Modern web interactivity and UI development', icon: <FaJsSquare />, bgColor: '#f7df1e', textColor: '#000' },
    { title: 'Python', description: 'Core language for automation, data science, and AI prototyping', icon: <FaPython />, bgColor: '#306998', textColor: '#ffd43b' },
    { title: 'React', description: 'Building scalable, polished single-page applications', icon: <FaReact />, bgColor: '#61dafb', textColor: '#20232a' },
    { title: 'Java', description: 'Enterprise-ready, object-oriented software development', icon: <FaJava />, bgColor: '#c82333', textColor: '#fff' },
    { title: 'C++', description: 'Performance-oriented systems and algorithmic work', icon: <CgCPlusPlus />, bgColor: '#003b5c', textColor: '#fff' },
    { title: 'SQL & Databases', description: 'Relational data modeling and query-driven applications', icon: <FaDatabase />, bgColor: '#475569' },
    { title: 'Jupyter & Data Science', description: 'Analysis, experimentation, and ML workflows', icon: <SiJupyter />, bgColor: '#f37626' },
    { title: 'TensorFlow', description: 'Computer vision and applied ML experiments', icon: <SiTensorflow />, bgColor: '#ff6f00' },
    { title: 'Hugging Face', description: 'Transformers, NLP demos, and AI experimentation', icon: <SiHuggingface />, bgColor: '#4f46e5' },
    { title: 'Git & GitHub', description: 'Version control and collaborative development', icon: <FaGitSquare />, bgColor: '#7f1d1d' },
    { title: 'HTML & CSS', description: 'Responsive structure and clean frontend presentation', icon: <FaHtml5 />, bgColor: '#e34f26' }
  ];

  return (
    <div className="skills-section">
      <p className="section-label">Core strengths</p>
      <h2>Tools and technologies I use to turn ideas into dependable products.</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Card
            className="skill-card"
            key={`${skill.title}-${index}`}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
            bgColor={skill.bgColor}
            textColor={skill.textColor}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;