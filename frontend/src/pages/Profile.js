// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

function Profile() {
  const [profile, setProfile] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Profil yüklenirken hata oluştu:', error);
      }
    };
    fetchProfile();
  }, [user]);

  if (!user) {
    return <p>Lütfen giriş yapın.</p>;
  }

  return (
    <div>
      {profile ? (
        <div>
          <h2>Merhaba, {profile.name}</h2>
          <p>Email: {profile.email}</p>
          <p>Rol: {profile.role}</p>
          <button>Profili Güncelle</button>
        </div>
      ) : (
        <p>Profil Yükleniyor...</p>
      )}
    </div>
  );
}

export default Profile;