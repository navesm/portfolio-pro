import React from 'react';
import './Modal.css';

function Modal({ show, onClose, children }) {
  if (!show) return null;
  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
};

export default Modal;