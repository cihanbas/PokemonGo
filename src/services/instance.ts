import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  timeout: 15000,
  baseURL: 'https://api.pokemontcg.io/v2/',
});

axiosInstance.interceptors.request.use(async config => {
  return config;
});

axiosInstance.interceptors.response.use(
  async response => {
    return response;
  },
  async err => {
    return Promise.reject(err);
  },
);

export default axiosInstance;
