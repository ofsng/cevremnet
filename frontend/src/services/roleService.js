// Çevrem.net Rol Servisi - roleService.js
import axios from 'axios';

const API_URL = '/api/roles';

// Yeni rol oluşturma
const createRole = async (roleData) => {
  try {
    const response = await axios.post(API_URL, roleData);
    return response.data;
  } catch (error) {
    console.error('Rol oluşturulurken hata oluştu:', error);
    throw error;
  }
};

// Tüm rolleri getirme
const getAllRoles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Roller getirilirken hata oluştu:', error);
    throw error;
  }
};

export default {
  createRole,
  getAllRoles,
};
