import React, { useState } from 'react';
import Modal from '../components/Modal'; // Modal component
import '../App.css'; // Include App.css file

// Photo data for the gallery page
const photos = [
  { id: 1, src: '/img/photo1.jpg', alt: 'Photo 1' },
  { id: 2, src: '/img/photo2.jpg', alt: 'Photo 2' },
  { id: 3, src: '/img/photo3.jpg', alt: 'Photo 3' },
  { id: 4, src: '/img/photo4.jpg', alt: 'Photo 4' },
  { id: 5, src: '/img/photo5.jpg', alt: 'Photo 5' },
  { id: 6, src: '/img/photo6.jpg', alt: 'Photo 6' },
  { id: 7, src: '/img/photo7.jpg', alt: 'Photo 7' },
  { id: 8, src: '/img/photo8.jpg', alt: 'Photo 8' },
  { id: 9, src: '/img/photo9.jpg', alt: 'Photo 9' },
  { id: 10, src: '/img/photo10.jpg', alt: 'Photo 10' },
  { id: 11, src: '/img/photo11.jpg', alt: 'Photo 11' },
  { id: 12, src: '/img/photo12.jpg', alt: 'Photo 12' },
  { id: 13, src: '/img/photo13.jpg', alt: 'Photo 13' },
  { id: 14, src: '/img/photo14.jpg', alt: 'Photo 14' },
  { id: 15, src: '/img/photo15.jpg', alt: 'Photo 15' },
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);

  // Open modal
  const openModal = (photo) => {
    setModalPhoto(photo);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setModalPhoto(null);
  };

  return (
    <div className="gallery-page">
      <h1>Galeri</h1>
      <div className="gallery-container">
        <div className="gallery">
          {photos.map((photo) => (
            <div className="gallery-item" key={photo.id} onClick={() => openModal(photo)}>
              <img
                src={process.env.PUBLIC_URL + photo.src}
                alt={photo.alt}
                className="gallery-img"
              />
            </div>
          ))}
        </div>
        {showModal && <Modal photo={modalPhoto} closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Gallery;
