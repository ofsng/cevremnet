// src/components/Guide.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Guide = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/complete-profile');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800 p-8">
      <h1 className="text-3xl font-bold mb-6">Çevrem.net'e Hoş Geldiniz!</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Çevrem.net'e katıldığınız için çok mutluyuz! Şimdi profil bilgilerinizi tamamlayarak bu büyük topluluğun bir parçası olun ve bağlantılarınızı güçlendirin.
      </p>
      <button
        onClick={handleContinue}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
      >
        Profili Tamamla
      </button>
    </div>
  );
};

export default Guide;