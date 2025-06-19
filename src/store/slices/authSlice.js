import { createSlice } from "@reduxjs/toolkit";
import { getToken, getUser, setToken, setUser, clearAuthData } from "@lib/auth";

const initialState = {
  user: getUser(),
  isAuthenticated: !!getToken(),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      setToken(action.payload.token);
      setUser(action.payload.user);
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      clearAuthData();
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setLoading, setError, loginSuccess, logoutSuccess, clearError } =
  authSlice.actions;

// Thunks
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));

    // Mock login for demo
    if (email === "user@example.com" && password === "password") {
      const userData = {
        user: {
          id: "1",
          email: "user@example.com",
          name: "Demo User",
        },
        token: "mock-jwt-token",
      };

      dispatch(loginSuccess(userData));
      return userData.user;
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    dispatch(setError(error.message));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    // Mock logout - in real app, call API
    await new Promise((resolve) => setTimeout(resolve, 500));
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(setError(error.message));
    // Still logout on error
    dispatch(logoutSuccess());
  } finally {
    dispatch(setLoading(false));
  }
};

export default authSlice.reducer;
