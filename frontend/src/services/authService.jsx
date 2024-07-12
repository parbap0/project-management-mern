import axios from 'axios';

const API_URL = 'http://localhost:4000/api/auth/';

const register = async (username, email, password) => {
  const response = await axios.post(`${API_URL}register`, { username, email, password });
  if (response.data.token) localStorage.setItem('token', response.data.token);
  return response.data;
};

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}login`, { email, password });
  if (response.data.token) localStorage.setItem('token', response.data.token);
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
};

const authService = { register, login, logout };
export default authService;
