// src/components/UploadImage.jsx
import React from 'react';

const UploadImage = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        onUpload(file);
      } else {
        alert('Solo se permiten archivos de imagen');
      }
    }
  };

  return (
    <div>
      <h2>Subir Imágenes</h2>
      <input type="file" onChange={handleFileChange} multiple />
    </div>
  );
};

export default UploadImage;
