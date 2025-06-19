import axios from "axios";
import { getToken, clearAuthData } from "@lib/auth";

// Base API instance with common configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized (expired token, etc.)
    if (error.response && error.response.status === 401) {
      clearAuthData();
      window.location.href = "/login";
    }

    // Handle 403 Forbidden
    if (error.response && error.response.status === 403) {
      console.error("Access forbidden");
    }

    // Handle network errors
    if (error.message === "Network Error") {
      console.error("Network error - please check your connection");
    }

    return Promise.reject(error);
  },
);

export default api;
