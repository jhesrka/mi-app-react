// src/pages/AdminPage.jsx
import React from 'react';
import Login from '../components/Login';
import UploadImage from '../components/UploadImage';

const AdminPage = ({ onLogin, isAuthenticated, onUpload }) => {
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Página del Administrador</h1>
          <UploadImage onUpload={onUpload} />
        </div>
      ) : (
        <Login onLogin={onLogin} />
      )}
    </div>
  );
}

export default AdminPage;
