import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <p className="section-label">About</p>
      <h2>I bring a systems mindset to software, data, and AI.</h2>
      <p>
        I’m a driven software engineering professional with a systems-oriented mindset and a strong foundation in full-stack development, cloud technologies, and applied AI. My background in high-pressure operations has sharpened my ability to deliver reliable solutions under tight constraints while maintaining clear communication and cross-functional collaboration.
      </p>
      <p>
        I’m currently completing a B.S. in Computer Science (Software Engineering concentration) with a minor in Applied Mathematics at Southern New Hampshire University, where I maintain a 3.89 GPA and expect to graduate in Winter 2026.
      </p>
      <p>
        My technical experience includes building production-grade full-stack applications, designing APIs and integrations, and developing intelligent systems using modern tools and cloud platforms. I’m particularly passionate about creating dependable software that solves real business problems by connecting strong user experiences with robust backend architecture and intelligent automation.
      </p>
      <ul className="about-highlights">
        <li>Full-stack web development (React, Node.js, MEAN stack, modern APIs)</li>
        <li>ML and AI demos with Python, Streamlit, and Hugging Face concepts</li>
        <li>Software design, databases, testing, and system reliability</li>
      </ul>
    </div>
  );
}

export default About;