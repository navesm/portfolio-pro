import React from 'react';
import './Card.css';

const Card = ({ icon, title, description, link, bgColor, textColor, className, image }) => {
  const cardStyle = {
    backgroundColor: bgColor || '#444',
    color: textColor || '#4CAF50;'
  }

  const cardClasses = `card ${link ? 'has-link' : ''} ${className || ''}`;
  return (
    <div className={cardClasses} style={cardStyle}>
      {image && (
        <img
          src={image}
          alt={`${title} project preview`}
          className="card-image"
        />
      )}
      <h2>{icon}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        {link ?
          <span>View {title}</span>
          :
          <span></span>
        }

      </a>
    </div>
  )
}

export default Card;