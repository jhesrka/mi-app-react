// src/AppRouter.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClientPage from './pages/ClientPage';
import AdminPage from './pages/AdminPage';

const AppRouter = () => {
  const [images, setImages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleUpload = (file) => {
    setImages([...images, file]);
  };

  const handleDelete = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleLogin = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Cliente</Link></li>
            <li><Link to="/admin">Administrador</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ClientPage images={images} onUpload={handleUpload} onDelete={handleDelete} />} />
          <Route path="/admin" element={<AdminPage onLogin={handleLogin} isAuthenticated={isAuthenticated} onUpload={handleUpload} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
