import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // TailwindCSS stillerini buradan dahil ediyoruz
import App from './App';
import { AuthProvider } from './hooks/useAuth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
