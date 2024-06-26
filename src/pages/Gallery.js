import React, { useState } from 'react';
import Modal from '../components/Modal'; // Modal bileşeni
import '../App.css'; // App.css dosyasını dahil edin

// Galeri sayfası için fotoğraf verisi
const photos = [
  { id: 1, src: '/img/photo1.jpg', alt: 'Photo 1' },
  { id: 2, src: '/img/photo2.jpg', alt: 'Photo 2' },
  { id: 3, src: '/img/photo3.jpg', alt: 'Photo 3' },
  { id: 4, src: '/img/photo4.jpg', alt: 'Photo 4' },
  { id: 5, src: '/img/photo5.jpg', alt: 'Photo 5' },
  // ... diğer fotoğraflar
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);

  // Modalı aç
  const openModal = (photo) => {
    setModalPhoto(photo);
    setShowModal(true);
  };

  // Modalı kapat
  const closeModal = () => {
    setShowModal(false);
    setModalPhoto(null);
  };

  return (
    <div className="gallery-container">
      {photos.map((photo) => (
        <div className="gallery-item" key={photo.id}>
          <img
            src={process.env.PUBLIC_URL + photo.src}
            alt={photo.alt}
            onClick={() => openModal(photo)}
            className="gallery-img"
          />
        </div>
      ))}

      {showModal && <Modal photo={modalPhoto} closeModal={closeModal} />}
    </div>
  );
};

export default Gallery;
