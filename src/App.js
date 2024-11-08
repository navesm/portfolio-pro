import { React, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { Link as ScrollLink } from 'react-scroll';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/projects/Projects.jsx';

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
      <h1 className="title">Hi, I'm Steven</h1>
      <NavBar />
      <section id="home" data-aos="fade-up" > Home Section </section>
      <section id="about" data-aos="fade-left" data-aos-delay='50' data-aos-duration='1000'>About</section>
      <section className="section-wrapper" id="projects" data-aos="fade-right" data-aos-delay='75' data-aos-duration='1000'>
        <Projects />
      </section>
      <section id="experience" data-aos="fade-left" data-aos-delay='75' data-aos-duration='1000'>Experience</section>
      <section id="contact" data-aos="fade-up" data-aos-delay='75' data-aos-duration='1000'>Contact</section>

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
