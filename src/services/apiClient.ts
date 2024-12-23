import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333', // Replace with your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Ensures cookies are sent for authentication
});

export default apiClient;
