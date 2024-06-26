import React from 'react';
import '../App.css'; // App.css dosyasından stilleri çekin

const Modal = ({ photo, closeModal }) => {
  if (!photo) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeModal}>X</button>
        <img src={photo.src} alt={photo.alt} className="modal-img" />
      </div>
    </div>
  );
};

export default Modal;
