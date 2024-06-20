// src/pages/ClientPage.jsx
import React from 'react';
import ImageGallery from '../components/ImageGallery';

const ClientPage = ({ images, onUpload, onDelete }) => {
  return (
    <div>
      <h1>Página del Cliente</h1>
      <ImageGallery images={images} onDelete={onDelete} />
    </div>
  );
}

export default ClientPage;
