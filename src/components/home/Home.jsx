import React from 'react';
import { ReactTyped } from 'react-typed';
import './Home.styles.css';
import profileImage from '../../profile.png';

function Home() {
  return (
    <section className="hero-section">
      <div className="home">
        <h1>Hi, I'm Steven</h1>
        <ReactTyped
          className="typed-text"
          strings={[
            "Software Developer",
            "Problem Solver",
            "Life-long Learner"
          ]}
          typeSpeed={50}
          backSpeed={60}
          loop
        />
      </div>
      <img src={profileImage} alt="Profile" className="profile-image" />
    </section>
  )
}

export default Home;