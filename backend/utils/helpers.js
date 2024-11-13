// Çevrem.net Utils - helpers.js
// Genel yardımcı işlevler.

const jwt = require('jsonwebtoken');

const formatDate = (date) => {
  return new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = {
  formatDate,
  generateToken,
};
