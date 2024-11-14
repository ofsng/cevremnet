// src/pages/GuidePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const GuidePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCompleteProfile = () => {
    navigate('/complete-profile');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Platforma Hoş Geldiniz, {user?.name}!</h2>
        <p className="text-lg mb-4 text-gray-700 text-center">
          Çevrem.net'in sunduğu tüm özelliklerden faydalanmak için profilinizi tamamlamanızı öneriyoruz. Bu rehberde platformumuzu nasıl kullanabileceğinizi öğreneceksiniz.
        </p>
        <ol className="list-decimal list-inside text-left mb-6 text-gray-700">
          <li className="mb-2">Profil bilgilerinizi eksiksiz doldurarak diğer kullanıcılarla daha kolay bağlantı kurabilirsiniz.</li>
          <li className="mb-2">Takım arkadaşları veya projelere katılmak için "Takım Durumu" seçeneğinizi belirtin.</li>
          <li className="mb-2">Yeteneklerinizi ve ilgi alanlarınızı belirterek doğru kişilerle eşleşin.</li>
          <li className="mb-2">Sosyal medya linklerinizi ekleyerek profilinizi güçlendirin.</li>
        </ol>
        <button
          onClick={handleCompleteProfile}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full"
        >
          Profilimi Tamamla
        </button>
      </div>
    </div>
  );
};

export default GuidePage;
