// Cevrem.net Services - announcementService.js
// Duyuru işlemleri için servis işlevleri.

const Announcement = require('../models/Announcement');

const createAnnouncement = async (announcementData) => {
  return await Announcement.create(announcementData);
};

const getAllAnnouncements = async () => {
  return await Announcement.find({}).populate('user', 'name email');
};

module.exports = {
  createAnnouncement,
  getAllAnnouncements,
};
