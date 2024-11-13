// Çevrem.net Rol Modeli - Role.js
// Kullanıcı rolü veritabanı şeması ve işlevleri.

const mongoose = require('mongoose');

const roleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    permissions: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;