// Çevrem.net Kullanıcı Rotaları - userRoutes.js
// Kullanıcı işlemleri ile ilgili API rotaları.

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, sendPasswordReset, resetPassword } = require('../controllers/userController');

// Kullanıcı Kayıt Rotası
router.post('/register', registerUser);

// Kullanıcı Giriş Rotası
router.post('/login', loginUser);

// Şifre Sıfırlama İsteği Rotası
router.post('/password-reset', sendPasswordReset);

// Yeni Şifre Belirleme Rotası
router.post('/reset-password', resetPassword);

module.exports = router;
