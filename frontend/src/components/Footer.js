// Çevrem.net Footer Bileşeni - Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-blue-600 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Çevrem.net. Tüm Hakları Saklıdır.</p>
        <p>
          <a href="/about" className="hover:text-gray-300">Hakkımızda</a> | 
          <a href="/contact" className="hover:text-gray-300">İletişim</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
