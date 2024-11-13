// Çevrem.net Backend Server - server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const config = require('./config/config');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const announcementRoutes = require('./routes/announcementRoutes');

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Kullanıcı Rotaları
app.use('/api/users', userRoutes);

// Duyuru Rotaları
app.use('/api/announcements', announcementRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Çevrem.net API Çalışıyor');
});

// Port Ayarı
const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
