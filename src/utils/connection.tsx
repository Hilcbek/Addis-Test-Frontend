import axios from 'axios';
export const baseURL = axios.create({
  baseURL: 'https://test-qvio.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});