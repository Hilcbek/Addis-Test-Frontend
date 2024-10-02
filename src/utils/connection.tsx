import axios from 'axios';
export const baseURL = axios.create({
  baseURL: 'http://localhost:8081/api',
  withCredentials: true,
  timeout: 5000,
});
