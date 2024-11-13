// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // TailwindCSS stillerini buradan dahil ediyoruz
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
