// Çevrem.net Services - roleService.js
// Rol işlemleri için servis işlevleri.

const Role = require('../models/Role');

const createRole = async (roleData) => {
  return await Role.create(roleData);
};

const getAllRoles = async () => {
  return await Role.find({});
};

module.exports = {
  createRole,
  getAllRoles,
};
