import { React, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { Link as ScrollLink } from 'react-scroll';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/projects/Projects.jsx';
import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx';

function App() {
  const [showButton, setShowButton] = useState(null);


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      //Show button after scrolling past 200px
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Home className="home" />
      <section id="about" data-aos="fade-left" data-aos-delay='50' data-aos-duration='1000'>About</section>
      <section className="section-wrapper" id="projects" data-aos="fade-right" data-aos-delay='75' data-aos-duration='1000'>
        <Projects />
      </section>
      <section id="skills" data-aos="fade-left" data-aos-delay='75' data-aos-duration='1000'>Skills</section>
      <section className="section-wrapper" id="contact" data-aos="fade-right" data-aos-delay='75' data-aos-duration='1000'>
        <Contact className="contact" />
      </section>

      {showButton && (
        <ScrollLink
          to="root"
          smooth={true}
          duration={650}
          className="back-to-top"
        >
          Back to Top
        </ScrollLink>
      )}
    </div>
  );
}

export default App;
