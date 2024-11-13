// src/pages/Profile.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/userContext';

function Profile() {
  const [profile, setProfile] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/users/profile`, {
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
