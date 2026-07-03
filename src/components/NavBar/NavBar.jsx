import './NavBar.css';
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
  return (
    <header className="header">
      <ScrollLink className="logo" to="home" smooth={true} duration={500}>
        Steven Nave
      </ScrollLink>
      <nav className="navbar">
        <ScrollLink className="nav-link" to="about" smooth={true} duration={500}>
          About
        </ScrollLink>
        <ScrollLink className="nav-link" to="projects" smooth={true} duration={800}>
          Projects
        </ScrollLink>
        <ScrollLink className="nav-link" to="skills" smooth={true} duration={800}>
          Skills
        </ScrollLink>
        <ScrollLink className="nav-link" to="contact" smooth={true} duration={800}>
          Contact
        </ScrollLink>
      </nav>
    </header>
  );
}

export default NavBar;