import axios from 'axios';
import { BASE_URL } from '../env';

const api = axios.create();

api.defaults.baseURL = BASE_URL;

export default api;
