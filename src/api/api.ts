import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  method: 'get'
});

export default api;