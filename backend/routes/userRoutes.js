// Cevrem.net Kullanıcı Rotaları - userRoutes.js
const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  sendPasswordReset,
  resetPassword,
} = require('../controllers/userController');
const { check } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');

// Kullanıcı Kayıt Rotası
router.post(
  '/register',
  [
    check('name', 'İsim gereklidir').not().isEmpty(),
    check('email', 'Geçerli bir e-posta adresi girin').isEmail(),
    check('password', 'Şifre en az 6 karakter olmalıdır').isLength({ min: 6 }),
  ],
  registerUser
);

// Kullanıcı Giriş Rotası
router.post(
  '/login',
  [
    check('email', 'Geçerli bir e-posta adresi girin').isEmail(),
    check('password', 'Şifre gereklidir').not().isEmpty(),
  ],
  loginUser
);

// Şifre Sıfırlama İsteği Rotası
router.post('/password-reset', sendPasswordReset);

// Yeni Şifre Belirleme Rotası (JWT ile korumalı)
router.post('/reset-password', authMiddleware, resetPassword);

module.exports = router;
