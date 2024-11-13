// src/pages/Announcements.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('/api/announcements');
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Duyurular yüklenirken hata oluştu:', error);
      }
    };
    fetchAnnouncements();
  }, []);

  return (
    <div>
      <h2>Duyurular</h2>
      {announcements.length > 0 ? (
        announcements.map((announcement) => (
          <div key={announcement._id}>
            <h3>{announcement.title}</h3>
            <p>{announcement.content}</p>
            <p>Kategori: {announcement.category}</p>
            <small>Gönderen: {announcement.user.name}</small>
          </div>
        ))
      ) : (
        <p>Henüz duyuru yok</p>
      )}
    </div>
  );
}

export default Announcements;
