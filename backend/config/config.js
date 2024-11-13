// config/config.js

require('dotenv').config(); // .env dosyasını yükler

// Config değişkenleri
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5001,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
  clientURL: process.env.CLIENT_URL || 'http://localhost:3000',
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailFrom: process.env.EMAIL_FROM,
};

// Değişkenlerin doğru yüklendiğini kontrol etmek için:
console.log('Loaded environment variables:', {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  emailUser: process.env.EMAIL_USER,
});

module.exports = config;
