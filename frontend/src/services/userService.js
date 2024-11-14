// src/services/userService.js
import axios from 'axios';

const getUserProfile = async (token) => {
  return await axios.get('http://localhost:5001/api/users/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default {
  getUserProfile,
};
