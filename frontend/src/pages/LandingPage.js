// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import introAnimation from '../assets/intro-animation.json';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page-container bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="animation-wrapper mb-8">
        <Lottie animationData={introAnimation} loop={true} className="w-72 h-72" />
      </div>
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Cevrem.net'e Hoş Geldiniz!</h1>
      <p className="text-lg text-gray-700 text-center max-w-lg mb-6">
        Profesyonelleri bir araya getiren, projelerinizi sergileyebileceğiniz ve yeni iş fırsatları yakalayabileceğiniz harika bir platforma hoş geldiniz. Şimdi katılın ve kariyerinizi bir üst seviyeye taşıyın.
      </p>
      <div className="flex space-x-4">
        <Link to="/register" className="cta-button bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
          Üye Ol
        </Link>
        <Link to="/login" className="cta-button bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Giriş Yap
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
