import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <div>
      <h2 className="cta">Contact Me</h2>
      <footer className="footer">
        <a href="https://github.com/navesm" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/steven-nave-578bb722b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto: your-email@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
        </a>
      </footer>
    </div>
  )
}

export default Contact;