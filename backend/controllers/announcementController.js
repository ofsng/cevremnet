// Cevrem.net Duyuru Denetleyicisi - announcementController.js
// Duyuru işlemleri için denetleyici işlevleri.

const Announcement = require('../models/Announcement');

// Yeni Duyuru Oluştur
const createAnnouncement = async (req, res) => {
  try {
    console.log('Yeni duyuru oluşturuluyor...');
    const { title, content, category } = req.body;
    const announcement = new Announcement({
      user: req.user._id,
      title,
      content,
      category,
    });
    const createdAnnouncement = await announcement.save();
    console.log('Yeni duyuru oluşturuldu:', createdAnnouncement);
    res.status(201).json(createdAnnouncement);
  } catch (err) {
    console.error('Duyuru oluşturulurken hata oluştu:', err);
    res.status(500).json({ message: 'Sunucu Hatası' });
  }
};

// Tüm Duyuruları Getir
const getAnnouncements = async (req, res) => {
  try {
    console.log('Tüm duyurular getiriliyor...');
    const announcements = await Announcement.find({}).populate('user', 'name email');
    console.log('Tüm duyurular başarıyla getirildi.');
    res.json(announcements);
  } catch (err) {
    console.error('Duyurular getirilirken hata oluştu:', err);
    res.status(500).json({ message: 'Sunucu Hatası' });
  }
};

// ID'ye Göre Duyuru Getir
const getAnnouncementById = async (req, res) => {
  try {
    console.log(`Duyuru ID ile getiriliyor: ${req.params.id}`);
    const announcement = await Announcement.findById(req.params.id).populate('user', 'name email');
    if (announcement) {
      console.log('Duyuru bulundu:', announcement);
      res.json(announcement);
    } else {
      console.warn('Duyuru bulunamadı.');
      res.status(404).json({ message: 'Duyuru Bulunamadı' });
    }
  } catch (err) {
    console.error('Duyuru getirilirken hata oluştu:', err);
    res.status(500).json({ message: 'Sunucu Hatası' });
  }
};

// Duyuru Güncelle
const updateAnnouncement = async (req, res) => {
  try {
    console.log(`Duyuru güncelleniyor: ${req.params.id}`);
    const { title, content, category } = req.body;
    const announcement = await Announcement.findById(req.params.id);

    if (announcement) {
      announcement.title = title;
      announcement.content = content;
      announcement.category = category;

      const updatedAnnouncement = await announcement.save();
      console.log('Duyuru güncellendi:', updatedAnnouncement);
      res.json(updatedAnnouncement);
    } else {
      console.warn('Güncellenecek duyuru bulunamadı.');
      res.status(404).json({ message: 'Duyuru Bulunamadı' });
    }
  } catch (err) {
    console.error('Duyuru güncellenirken hata oluştu:', err);
    res.status(500).json({ message: 'Sunucu Hatası' });
  }
};

// Duyuru Sil
const deleteAnnouncement = async (req, res) => {
  try {
    console.log(`Duyuru siliniyor: ${req.params.id}`);
    const announcement = await Announcement.findById(req.params.id);

    if (announcement) {
      await announcement.remove();
      console.log('Duyuru silindi:', req.params.id);
      res.json({ message: 'Duyuru Silindi' });
    } else {
      console.warn('Silinecek duyuru bulunamadı.');
      res.status(404).json({ message: 'Duyuru Bulunamadı' });
    }
  } catch (err) {
    console.error('Duyuru silinirken hata oluştu:', err);
    res.status(500).json({ message: 'Sunucu Hatası' });
  }
};

module.exports = {
  createAnnouncement,
  getAnnouncements,
  getAnnouncementById,
  updateAnnouncement,
  deleteAnnouncement,
};