// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa desde 'react-dom/client'
import './index.css';
import AppRouter from './AppRouter';
import Modal from 'react-modal';

// Establece el elemento raíz para react-modal
Modal.setAppElement('#root');

// Crea una raíz en el elemento 'root' del DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación en la raíz creada
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
