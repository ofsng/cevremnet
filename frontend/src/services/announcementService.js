// src/services/announcementService.js
import axios from 'axios';

const getAllAnnouncements = async () => {
  return await axios.get('/api/announcements');
};

export default {
  getAllAnnouncements,
};
