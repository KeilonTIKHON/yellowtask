import axios from 'axios';

const API_URL = 'https://jogs-tracker-production.up.railway.app';

const api = axios.create({
  baseURL: API_URL,
});

export const setAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default api;