// src/pages/CreateAnnouncement.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/userContext';

function CreateAnnouncement() {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleCreateAnnouncement = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/api/announcements',
        { title, content, category },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log('Duyuru oluşturuldu:', response.data);
    } catch (error) {
      console.error('Duyuru oluşturma hatası:', error);
    }
  };

  return (
    <form onSubmit={handleCreateAnnouncement}>
      <input
        type="text"
        placeholder="Başlık"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="İçerik"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Kategori"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Duyuru Oluştur</button>
    </form>
  );
}

export default CreateAnnouncement;
