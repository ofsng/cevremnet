const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
  try {
    console.log('Veritabanına bağlanılıyor...');
    await mongoose.connect(config.mongoURI);
    console.log('MongoDB Bağlantısı Başarılı');
  } catch (err) {
    console.error(`Veritabanı Bağlantı Hatası: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
