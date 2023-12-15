import axios from 'axios';
import { URLS } from 'src/constants';

const axiosInstance = axios.create({
  baseURL: URLS.SERVER_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: '*/*',
  },
  withCredentials: true,
});

export default axiosInstance;
