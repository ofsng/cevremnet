// Çevrem.net Dashboard Sayfası - Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import AnnouncementForm from '../components/AnnouncementForm';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userInfo));
    }
  }, [navigate]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const { data } = await axios.get('/api/announcements');
        setAnnouncements(data);
      } catch (error) {
        console.error('Duyurular getirilirken hata oluştu:', error);
      }
    };
    fetchAnnouncements();
  }, []);

  const handleNewAnnouncement = async (announcementData) => {
    try {
      const { data } = await axios.post('/api/announcements', announcementData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setAnnouncements((prev) => [data, ...prev]);
    } catch (error) {
      console.error('Duyuru oluşturulurken hata oluştu:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Hoş Geldiniz, {user?.name}</h1>
      <ProfileCard user={user} />
      <AnnouncementForm onSubmit={handleNewAnnouncement} />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Duyurular</h2>
        {announcements.length > 0 ? (
          announcements.map((announcement) => (
            <div key={announcement._id} className="bg-white p-4 mb-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">{announcement.title}</h3>
              <p className="text-gray-700">{announcement.content}</p>
              <p className="text-sm text-gray-500 mt-2">Kategori: {announcement.category}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Henüz duyuru bulunmuyor.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
