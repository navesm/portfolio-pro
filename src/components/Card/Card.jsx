import React from 'react';
import './Card.css';

const Card = ({ icon, title, description, link, bgColor, textColor, className, image, tags }) => {
  const cardStyle = {
    background: bgColor || '#1f2937',
    color: textColor || '#f8fafc'
  };

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
      {tags?.length > 0 && (
        <div className="card-tags">
          {tags.map((tag) => (
            <span key={tag} className="card-tag">{tag}</span>
          ))}
        </div>
      )}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          View project
        </a>
      ) : (
        <span className="card-link muted-link">In progress</span>
      )}
    </div>
  );
};

export default Card;