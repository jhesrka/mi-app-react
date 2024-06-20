import React, { useState } from 'react';
import './App.css';
import UploadImage from './components/UploadImage';
import ImageGallery from './components/ImageGallery';

function App() {
  const [images, setImages] = useState([]);

  const handleUpload = (newImage) => {
    setImages([...images, newImage]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación de Gestión de Imágenes</h1>
        <UploadImage onUpload={handleUpload} />
        <ImageGallery images={images} />
      </header>
    </div>
  );
}

export default App;
