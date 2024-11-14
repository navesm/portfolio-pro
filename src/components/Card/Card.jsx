import React from 'react';
import './Card.css';

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img alt=""></img>
      <a href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <span>View {title}</span>

      </a>
    </div>
  )
}

export default Card;