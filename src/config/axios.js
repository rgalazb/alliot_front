// cualquier configuracion local relacionada a axios va en este archivo
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL
});

export default axiosClient;
