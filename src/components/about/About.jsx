import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About</h2>
      <h3>At a glance</h3>
      <p>Mathematics and computer science are more than academic pursuits - they represent the excitement
        of problem-solving and the thrill of those breakthrough moments when complex concepts finally click into place.
        This passion for understanding drives my excitement and commitment to continuous learning and real-world application for new skills.
        <br></br>
      </p>
      <br></br>
      <p>Currently pursuing a Computer Science/Software Engineering degree at Southern New Hampshire
        University with a 3.96 GPA, my prior academic foundations include:
        <br></br>
        <ul>
          <li>
            Application Development
          </li>
          <li>
            Structured Database Environments
          </li>
          <li>
            Discrete Math
          </li>
          <li>
            Applied Statistics for STEM
          </li>
          <li>
            Applied Linear Algebra
          </li>
        </ul>
      </p>
      <br></br>
      <p>Beyond formal education, my current ongoing self-directed learning focuses on advanced topics like
        Machine Learning and Neural Networks, as well as refamiliarizing myself with backend development through
        Node.js, Express, and REST APIs. Currently, I'm working on adding authentication and persistence to the YouKan Flowboard
        project below, after which a speech-to-text element for mobile use and manipulating tasks will be added.
        <br></br>
        <br></br>
        The portfolio below showcases various projects that reflect both technical capabilities and commitment to continuous growth
        in software engineering.
      </p>

    </div>
  );
};

export default About;