import { create } from "zustand";
import authService from "@services/authService";
import {
  setToken,
  getToken,
  setUser,
  getUser,
  clearAuthData,
  isAuthenticated as checkIsAuthenticated,
} from "@lib/auth";

export const useAuthStore = create((set, get) => ({
  // State
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,

  // Actions
  checkAuth: () => {
    const token = getToken();
    const user = getUser();

    set({
      isAuthenticated: checkIsAuthenticated(),
      user,
      loading: false,
    });
  },

  login: async (email, password) => {
    try {
      set({ loading: true, error: null });

      const { user, token } = await authService.login(email, password);

      // Store auth data
      setToken(token);
      setUser(user);

      set({
        user,
        isAuthenticated: true,
        loading: false,
      });

      return user;
    } catch (error) {
      set({
        error: error.message || "Login failed",
        loading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    try {
      set({ loading: true });

      await authService.logout();

      // Clear auth data
      clearAuthData();

      set({
        user: null,
        isAuthenticated: false,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message || "Logout failed",
        loading: false,
      });
      // Still clear local data even if the server request fails
      clearAuthData();
      set({ user: null, isAuthenticated: false });
    }
  },

  clearError: () => set({ error: null }),
}));
