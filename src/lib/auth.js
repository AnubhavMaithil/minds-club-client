/**
 * Helper functions for authentication
 */

/**
 * Store authentication token in localStorage
 * @param {string} token - The JWT token
 */
export const setToken = (token) => {
  localStorage.setItem("auth_token", token);
};

/**
 * Get authentication token from localStorage
 * @returns {string|null} The stored token or null
 */
export const getToken = () => {
  return localStorage.getItem("auth_token");
};

/**
 * Store user data in localStorage
 * @param {Object} user - The user object
 */
export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

/**
 * Get user data from localStorage
 * @returns {Object|null} The stored user object or null
 */
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

/**
 * Clear all authentication data from localStorage
 */
export const clearAuthData = () => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user");
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if the user is authenticated
 */
export const isAuthenticated = () => {
  return !!getToken();
};
