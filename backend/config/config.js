// Çevrem.net Backend Configuration - config.js
// Uygulama genel ayarları ve sabitlerin yönetimi.

require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
  clientURL: process.env.CLIENT_URL || 'http://localhost:3000',
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailFrom: process.env.EMAIL_FROM,
};

module.exports = config;