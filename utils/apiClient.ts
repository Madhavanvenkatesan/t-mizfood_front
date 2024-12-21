import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3333', // Your backend URL
  withCredentials: true, // Ensure cookies are sent
});

export default apiClient;
