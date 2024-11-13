// Çevrem.net Kullanıcı Denetleyicisi - userController.js
// Kullanıcı işlemleri için denetleyici işlevleri.

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const sendEmail = require('../utils/email');

// Kullanıcı Giriş İşlemi
const loginUser = async (req, res) => {
  try {
    console.log('Kullanıcı giriş yapıyor...');
    const { email, password } = req.body;

    // Kullanıcıyı kontrol et
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      console.log('Kullanıcı giriş başarılı:', user);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: user.generateAuthToken(),
      });
    } else {
      console.warn('Geçersiz e-posta veya şifre.');
      res.status(401).json({ message: 'Geçersiz e-posta veya şifre' });
    }
  } catch (err) {
    console.error('Giriş işlemi sırasında hata oluştu:', err);
    res.status(500).json({ message: 'Sunucu Hatası' });
  }
};

// Kullanıcı Kayıt İşlemi
const registerUser = async (req, res) => {
  try {
    console.log('Yeni kullanıcı kaydediliyor...');
    const { name, email, password } = req.body;

    // Kullanıcının zaten kayıtlı olup olmadığını kontrol et
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.warn('Bu e-posta zaten kayıtlı:', email);
      return res.status(400).json({ message: 'Bu e-posta zaten kayıtlı' });
    }

    // Yeni kullanıcı oluştur
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      console.log('Yeni kullanıcı oluşturuldu:', user);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: user.generateAuthToken(),
      });
    } else {
      console.warn('Geçersiz kullanıcı verileri.');
      res.status(400).json({ message: 'Geçersiz kullanıcı verileri' });
    }
  } catch (err) {
    console.error('Kayıt işlemi sırasında hata oluştu:', err);
    res.status(500).json({ message: 'Sunucu Hatası' });
  }
};

// Kullanıcı Şifre Sıfırlama İsteği
const sendPasswordReset = async (req, res) => {
  try {
    console.log('Şifre sıfırlama isteği alındı...');
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      console.warn('Şifre sıfırlama için kullanıcı bulunamadı:', email);
      return res.status(404).json({ message: 'Bu e-posta ile kayıtlı kullanıcı bulunamadı' });
    }

    // Token oluştur ve kullanıcıya gönder
    const resetToken = user.generateAuthToken();
    const resetUrl = `${config.clientURL}/reset-password/${resetToken}`;
    const message = `Şifre sıfırlama bağlantınız: ${resetUrl}`;

    // E-posta gönderimi
    await sendEmail({
      email: user.email,
      subject: 'Çevrem.net Şifre Sıfırlama',
      message,
    });

    console.log('Şifre sıfırlama e-postası gönderildi:', email);
    res.status(200).json({ message: 'Şifre sıfırlama e-postası gönderildi' });
  } catch (err) {
    console.error('Şifre sıfırlama isteği sırasında hata oluştu:', err);
    res.status(500).json({ message: 'Sunucu Hatası' });
  }
};

// Kullanıcı Yeni Şifre Belirleme
const resetPassword = async (req, res) => {
  try {
    console.log('Yeni şifre belirleme işlemi başlatılıyor...');
    const { token, newPassword } = req.body;

    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await User.findById(decoded.id);

    if (!user) {
      console.warn('Kullanıcı bulunamadı:', decoded.id);
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    user.password = newPassword;
    await user.save();

    console.log('Şifre başarıyla güncellendi:', user._id);
    res.status(200).json({ message: 'Şifre başarıyla güncellendi' });
  } catch (err) {
    console.error('Şifre belirleme sırasında hata oluştu:', err);
    res.status(500).json({ message: 'Sunucu Hatası' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  sendPasswordReset,
  resetPassword,
};