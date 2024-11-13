// Çevrem.net Services - userService.js
// Kullanıcı işlemleri için servis işlevleri.

const User = require('../models/User');

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const createUser = async (userData) => {
  return await User.create(userData);
};

module.exports = {
  findUserByEmail,
  createUser,
};
