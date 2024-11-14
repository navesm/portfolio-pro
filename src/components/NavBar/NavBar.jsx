import './NavBar.css';
import { Link as ScrollLink } from 'react-scroll';


function NavBar() {
  return (
    <header className="header">
      <nav className=".navbar">
        <div><h2>Steven Nave</h2></div>
        <div>
          <ScrollLink className="nav-link" to='about' smooth={true} duration={500}>
            About
          </ScrollLink>
          <ScrollLink className="nav-link" to="projects" smooth={true} duration={1000}>
            Projects
          </ScrollLink>
          <ScrollLink className="nav-link" to="skills" smooth={true} duration={1000}>
            Skills
          </ScrollLink>
          <ScrollLink className="nav-link" to="contact" smooth={true} duration={1000}>
            Contact
          </ScrollLink>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;