// Çevrem.net Rol Rotaları - roleRoutes.js
// Rol işlemleri ile ilgili API rotaları.

const express = require('express');
const router = express.Router();
const { createRole, getRoles } = require('../controllers/roleController');

// Yeni Rol Oluşturma Rotası
router.post('/', createRole);

// Tüm Rolleri Getirme Rotası
router.get('/', getRoles);

module.exports = router;