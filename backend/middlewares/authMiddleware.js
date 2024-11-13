// Çevrem.net Kullanıcı Kimlik Doğrulama Middleware - authMiddleware.js
// Kullanıcı kimlik doğrulaması için middleware.

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/config');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      console.log('Token kontrol ediliyor...');
      token = req.headers.authorization.split(' ')[1];

      // Tokeni doğrula
      const decoded = jwt.verify(token, config.jwtSecret);

      // Kullanıcıyı bul ve req.user olarak ata
      req.user = await User.findById(decoded.id).select('-password');
      console.log('Kullanıcı doğrulandı:', req.user);

      next();
    } catch (err) {
      console.error('Token doğrulama hatası:', err);
      res.status(401).json({ message: 'Geçersiz veya yetkisiz token' });
    }
  }

  if (!token) {
    console.warn('Token bulunamadı. Yetkisiz erişim denemesi.');
    res.status(401).json({ message: 'Token bulunamadı, yetkisiz erişim' });
  }
};

module.exports = { protect };