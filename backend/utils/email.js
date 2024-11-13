// Çevrem.net E-posta Gönderim İşlevi - email.js
// Kullanıcılara e-posta gönderimi için yardımcı işlevler.

const nodemailer = require('nodemailer');
const config = require('../config/config');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  });

  const mailOptions = {
    from: config.emailFrom,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi:', options.email);
  } catch (error) {
    console.error('E-posta gönderim hatası:', error);
  }
};

module.exports = sendEmail;
