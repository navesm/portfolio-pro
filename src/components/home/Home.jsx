import React from 'react';
import { ReactTyped } from 'react-typed';
import './Home.styles.css';
import profileImage from '../../profile.png';

function Home() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Software Systems Engineer • Full-Stack Developer • AI Enthusiast</p>
        <h1>Hi, I’m Steven Nave.</h1>
        <ReactTyped
          className="typed-text"
          strings={[
            'Software Systems Engineer',
            'Full-Stack Developer',
            'AI/ML Builder',
            'Problem Solver'
          ]}
          typeSpeed={45}
          backSpeed={55}
          loop
        />
        <p className="hero-summary">
          I build reliable web applications, practical AI workflows, and thoughtful software systems with a strong foundation in mathematics, testing, and user experience.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="primary-link">View projects</a>
          <a href="#contact" className="secondary-link">Let’s connect</a>
        </div>
      </div>
      <div className="hero-visual">
        <img src={profileImage} alt="Steven Nave" className="profile-image" />
        <div className="hero-badge">BS Computer Science • Applied Math • 3.89 GPA</div>
      </div>
    </section>
  );
}

export default Home;