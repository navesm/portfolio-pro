import React from 'react';
import './Card.css';

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img alt="focus fit project screenshot"></img>
      <a href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        View Project
      </a>
    </div>
  )
}

export default Card;