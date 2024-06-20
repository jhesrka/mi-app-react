// src/components/ImageGallery.jsx
import React, { useState } from 'react';
import ImageModal from './Modal';

const ImageGallery = ({ images, onDelete }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <h2>Galería de Imágenes</h2>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} onClick={() => openModal(image)} />
            <button onClick={() => onDelete(index)}>Eliminar</button>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} image={selectedImage} />
      )}
    </div>
  );
};

export default ImageGallery;
