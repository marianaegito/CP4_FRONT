// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Se você estiver usando a versão mais recente do React
import './index.css';  // Aqui você importa o arquivo de estilos global
import App from './App.jsx';  // Importando o componente principal

const root = ReactDOM.createRoot(document.getElementById('root'));  // Criação da raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
