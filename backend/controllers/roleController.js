// Çevrem.net Rol Denetleyicisi - roleController.js
// Kullanıcı rolleri ile ilgili işlevler.

const Role = require('../models/Role');

// Yeni Rol Oluştur
const createRole = async (req, res) => {
  try {
    console.log('Yeni rol oluşturuluyor...');
    const { name, permissions } = req.body;

    // Yeni rol oluştur
    const role = new Role({ name, permissions });
    const createdRole = await role.save();
    console.log('Yeni rol oluşturuldu:', createdRole);

    res.status(201).json(createdRole);
  } catch (err) {
    console.error('Yeni rol oluşturulurken hata oluştu:', err);
    res.status(500).json({ message: 'Sunucu Hatası' });
  }
};

// Tüm Rolleri Getir
const getRoles = async (req, res) => {
  try {
    console.log('Tüm roller getiriliyor...');
    const roles = await Role.find({});
    console.log('Tüm roller başarıyla getirildi.');
    res.json(roles);
  } catch (err) {
    console.error('Roller getirilirken hata oluştu:', err);
    res.status(500).json({ message: 'Sunucu Hatası' });
  }
};

module.exports = {
  createRole,
  getRoles,
};