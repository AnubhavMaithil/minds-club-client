import axios from 'axios';
import logo from '../assets/images/logo.svg'
import { store } from '../Redux/store';

export const MainContent = {
  AppName: "Minds Club",
  AppLogo: logo
}

export const backendConfig = {
  // base: "http://192.168.1.17:6030/api",
  // origin: "http://192.168.1.17:6030",
};

export const Axios = axios.create({
  baseURL: backendConfig.base,
  withCredentials: true,
});

Axios.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state?.auth?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);