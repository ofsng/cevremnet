// src/pages/Guide.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Guide = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleCompleteProfile = () => {
    const updatedUser = { ...user, profileComplete: true };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    navigate('/complete-profile');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Platforma Hoş Geldiniz!</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Profilinizi tamamlamak, sosyal medya bağlantılarınızı eklemek ve yeteneklerinizi belirtmek, platformu en iyi şekilde kullanmanıza yardımcı olacaktır.
      </p>
      <button
        onClick={handleCompleteProfile}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
      >
        Profili Tamamla
      </button>
    </div>
  );
};

export default Guide;