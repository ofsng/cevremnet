// Cevrem.net Rol Context'i - roleContext.js
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import roleService from '../services/roleService';

const RoleContext = createContext();

const roleReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ROLES':
      return { ...state, roles: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const RoleProvider = ({ children }) => {
  const initialState = {
    roles: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(roleReducer, initialState);

  useEffect(() => {
    const fetchRoles = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const roles = await roleService.getAllRoles();
        dispatch({ type: 'SET_ROLES', payload: roles });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    fetchRoles();
  }, [dispatch]);

  return (
    <RoleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RoleContext.Provider>
  );
};

const useRoleContext = () => {
  return useContext(RoleContext);
};

export { RoleProvider, useRoleContext };
