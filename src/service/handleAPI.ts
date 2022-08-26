import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'LocalizaAtivo-token': savedToken } = parseCookies()

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    'Authorization': savedToken ? "" : `Bearer ${savedToken}`
  },
  maxRedirects: 3
});

export default api;