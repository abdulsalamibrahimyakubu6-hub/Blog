"use client";
import { createContext, useState, useEffect, useContext } from 'react';
import { apiClient } from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount, verify token and fetch user profile
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      apiClient
        .get('/auth/me/')
        .then((res) => {
          setUser(res.data);
        })
        .catch(() => {
          localStorage.removeItem('access_token');
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const response = await apiClient.post('/auth/token/', { email, password });
    const { access, refresh } = response.data;
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    // fetch user profile
    const me = await apiClient.get('/auth/me/');
    setUser(me.data);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
  };

  const register = async (email, password, username) => {
    await apiClient.post('/auth/register/', { email, password, username });
    // auto‑login after registration
    await login(email, password);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
