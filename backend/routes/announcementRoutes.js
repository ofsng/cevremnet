// Cevrem.net Duyuru Rotaları - announcementRoutes.js
// Duyuru işlemleri ile ilgili API rotaları.

const express = require('express');
const router = express.Router();
const {
  createAnnouncement,
  getAnnouncements,
  getAnnouncementById,
  updateAnnouncement,
  deleteAnnouncement,
} = require('../controllers/announcementController');
const { protect } = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Yeni Duyuru Oluştur (Kimlik Doğrulama Gerektirir)
router.post('/', protect, roleMiddleware(['Alpha', 'Golden', 'Premium']), createAnnouncement);

// Tüm Duyuruları Getir
router.get('/', getAnnouncements);

// ID'ye Göre Duyuru Getir
router.get('/:id', getAnnouncementById);

// Duyuru Güncelle (Kimlik Doğrulama Gerektirir)
router.put('/:id', protect, roleMiddleware(['Golden', 'Premium']), updateAnnouncement);

// Duyuru Sil (Kimlik Doğrulama Gerektirir)
router.delete('/:id', protect, roleMiddleware(['Premium']), deleteAnnouncement);

module.exports = router;