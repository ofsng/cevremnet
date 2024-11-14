// src/hooks/useRole.js
import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState('Normal');

  useEffect(() => {
    if (user && user.role) {
      setRole(user.role);
    }
  }, [user]);

  return role;
};

export default useRole;