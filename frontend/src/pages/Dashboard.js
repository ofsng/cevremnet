// src/pages/Dashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import ProfileCard from '../components/ProfileCard';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (!user.profileComplete) {
      navigate('/guide');
    }
  }, [user, navigate]);

  if (!user) {
    return <p>Yönlendiriliyorsunuz...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Hoş Geldiniz, {user?.name || 'Kullanıcı'}</h1>
      <ProfileCard user={user} />
    </div>
  );
};

export default Dashboard;