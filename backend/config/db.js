// Çevrem.net Backend Configuration - db.js
// Veritabanı bağlantısı ve yapılandırma ayarları.

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    console.log('Veritabanına bağlanılıyor...');
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Bağlantısı Başarılı');
  } catch (err) {
    console.error(`Veritabanı Bağlantı Hatası: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;