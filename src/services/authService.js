import api from "@services/api";

/**
 * Authentication service for handling user login, registration, and other auth operations
 */
const authService = {
  /**
   * Login user with email and password
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise} The response data with user and token
   */
  login: async (email, password) => {
    try {
      // In a real app, this would be an actual API call
      // const response = await api.post('/auth/login', { email, password });
      // return response.data;

      // Mock response for demo purposes
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulate successful login
          if (email === "user@example.com" && password === "password") {
            resolve({
              user: {
                id: "1",
                email: "user@example.com",
                name: "Demo User",
              },
              token: "mock-jwt-token",
            });
          } else {
            throw new Error("Invalid credentials");
          }
        }, 800);
      });
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  /**
   * Register a new user
   * @param {Object} userData - User registration data
   * @returns {Promise} The response data with user and token
   */
  register: async (userData) => {
    try {
      const response = await api.post("/auth/register", userData);
      return response.data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  /**
   * Logout user
   * @returns {Promise} Success or error
   */
  logout: async () => {
    try {
      // In a real app, you might want to invalidate the token on the server
      // await api.post('/auth/logout');
      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },

  /**
   * Get current user's profile
   * @returns {Promise} The user profile data
   */
  getCurrentUser: async () => {
    try {
      const response = await api.get("/auth/me");
      return response.data;
    } catch (error) {
      console.error("Get current user error:", error);
      throw error;
    }
  },
};

export default authService;
