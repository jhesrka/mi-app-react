// src/components/Modal.jsx
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Para accesibilidad

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <div>
        <img src={URL.createObjectURL(image)} alt="Selected" style={{ width: '100%' }} />
        <button onClick={onRequestClose}>Cerrar</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
