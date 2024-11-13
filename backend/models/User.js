// Cevrem.net Kullanıcı Modeli - User.js
// Kullanıcı veritabanı şeması ve işlevleri.

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Normal', 'Alpha', 'Golden', 'Premium'],
      default: 'Normal',
    },
  },
  {
    timestamps: true,
  }
);

// Şifreyi hashleyerek kaydetme
userSchema.pre('save', async function (next) {
  console.log('Şifre hashleme işlemi başlatılıyor...');
  if (!this.isModified('password')) {
    console.log('Şifre değiştirilmedi, hashleme atlanıyor.');
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  console.log('Şifre hashleme işlemi tamamlandı.');
});

// Şifre eşleştirme
userSchema.methods.matchPassword = async function (enteredPassword) {
  console.log('Şifre eşleştirme işlemi yapılıyor...');
  return await bcrypt.compare(enteredPassword, this.password);
};

// JWT Token oluşturma
userSchema.methods.generateAuthToken = function () {
  console.log('JWT Token oluşturuluyor...');
  return jwt.sign({ id: this._id }, config.jwtSecret, {
    expiresIn: '30d',
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;