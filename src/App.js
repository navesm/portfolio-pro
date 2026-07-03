import { React, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowCircleUp } from 'react-icons/fa';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/projects/Projects.jsx';
import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic',
      offset: 80,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App" id="top">
      <NavBar />
      <Home className="home" />
      <section id="about" className="section-shell" data-aos="fade-up">
        <About />
      </section>
      <section id="projects" className="section-shell" data-aos="fade-up">
        <Projects />
      </section>
      <section id="skills" className="section-shell" data-aos="fade-up">
        <Skills />
      </section>
      <section id="contact" className="section-shell" data-aos="fade-up">
        <Contact className="contact" />
      </section>

      {showButton && (
        <ScrollLink
          to="top"
          smooth={true}
          duration={650}
          className="back-to-top"
          aria-label="Back to top"
        >
          <FaArrowCircleUp className="arrow" />
        </ScrollLink>
      )}
    </div>
  );
}

export default App;
