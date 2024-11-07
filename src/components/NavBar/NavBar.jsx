import './NavBar.css';
import { Link as ScrollLink } from 'react-scroll';


function NavBar() {
  return (
    <header className="header">
      <nav className="links-list">
        <ScrollLink className="nav-link" to='about' smooth={true} duration={500}>
          About
        </ScrollLink>
        <ScrollLink className="nav-link" to="projects" smooth={true} duration={1000}>
          Projects
        </ScrollLink>
        <ScrollLink className="nav-link" to="experience" smooth={true} duration={1000}>
          Experience
        </ScrollLink>
        <ScrollLink className="nav-link" to="contact" smooth={true} duration={1000}>
          Contact
        </ScrollLink>
      </nav>
    </header>
  )
}

export default NavBar;