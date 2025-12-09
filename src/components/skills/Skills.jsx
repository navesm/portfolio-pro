import React from 'react';
import Card from '../Card/Card.jsx';
import { FaPython, FaJsSquare, FaReact, FaDatabase, FaGitSquare, FaHtml5 } from 'react-icons/fa';
import { SiJupyter } from 'react-icons/si';
import './Skills.css';
import { FaJava } from 'react-icons/fa6';
import { CgCPlusPlus } from 'react-icons/cg';

function Skills() {

  const skills = [
    { title: "JavaScript", description: "The language of the Web", icon: <FaJsSquare />, bgColor: "#F7df1e", textColor: "#000" },
    { title: "Python", description: "The most popular scripting and AI/ML choice", icon: <FaPython />, bgColor: "#306998", textColor: "#FFD43B" },
    { title: "Java", description: "Powerful, platform-independent language for enterprises and mobile apps", icon: <FaJava />, bgColor: "#C82333", textColor: "#FFFFFF" },
    { title: "C++", description: "High-performance language for system/software development", icon: <CgCPlusPlus />, bgColor: "#003B5C", textColor: "#FFFFFF" },
    { title: "React", description: "Building Scalable SPA's", icon: <FaReact />, bgColor: "#61dafb", textColor: "#20232A" },
    { title: "Jupyter Notebook", description: "Data analysis, Math-heavy computation, ML/DL/AI", icon: <SiJupyter />, bgColor: "#f37626" },
    { title: "Databases/SQL", description: "SQL for relational databases", icon: <FaDatabase />, bgColor: "slategrey" },
    { title: "Git and Version Control", description: "CLI Git for Version Control, with Github", icon: <FaGitSquare />, bgColor: "maroon" },
    { title: "Hyper Text Markup Language", description: "Content Creation and DOM manipulation", icon: <FaHtml5 />, bgColor: "red" }
  ]
  return (
    <div>
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Card
            className="skill-card"
            key={index}
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
};

export default Skills;