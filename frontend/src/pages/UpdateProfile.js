// src/pages/UpdateProfile.js
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../context/userContext';

function UpdateProfile() {
  const { user } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `/api/users/profile`,
        { name, email },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log('Profil güncellendi:', response.data);
    } catch (error) {
      console.error('Profil güncelleme hatası:', error);
    }
  };

  return (
    <form onSubmit={handleUpdateProfile}>
      <input
        type="text"
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-posta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Profili Güncelle</button>
    </form>
  );
}

export default UpdateProfile;
