// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const ProfilePage = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/users/${user._id}`);
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError('Kullanıcı bilgileri alınırken bir hata oluştu.');
        setLoading(false);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user, setUser]);

  const handleEditProfile = () => {
    navigate('/update-profile');
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Profilim</h2>
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={user.profilePicture || '/default-profile.png'}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.company}</p>
            <p className="text-gray-600">{user.teamStatus}</p>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg mb-2">Yetenekler</h4>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg mb-2">Sosyal Medya</h4>
          {user.socialLinks.linkedin && (
            <p><a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a></p>
          )}
          {user.socialLinks.github && (
            <p><a href={user.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a></p>
          )}
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg mb-2">Hakkımda</h4>
          <p className="text-gray-700">{user.bio || 'Henüz bilgi eklenmedi.'}</p>
        </div>
        <button
          onClick={handleEditProfile}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full"
        >
          Profili Güncelle
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
