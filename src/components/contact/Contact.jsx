import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Modal from '../modal/Modal.jsx';
import './Contact.css';

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (response.ok) {
        setSuccessMessage('Your message was sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSuccessMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };


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
        <FaEnvelope
          style={{ cursor: 'pointer' }}
          className="icon"
          onClick={handleOpenModal}
        />
      </footer>
      <Modal show={showModal} onClose={handleCloseModal}>
        {successMessage && <p>{successMessage}</p>}
        <form
          className="form"
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div>
            <input type="hidden" name="bot=field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Message:
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
          </div>
          <button className="button" type="submit">Send</button>
        </form>
      </Modal>
    </div>
  )
}

export default Contact;