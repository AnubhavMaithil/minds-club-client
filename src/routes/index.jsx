import { lazy } from "react";
import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import ProtectedRoute from "@routes/ProtectedRoute";
import { useAuthStore } from "@store/authStore";

// Lazy-loaded pages for better performance
const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const Dashboard = lazy(() => import("@pages/Dashboard"));
const NotFound = lazy(() => import("@pages/NotFound"));

export const Routes = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <RouterRoutes>
      {/* Public routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
          }
        />
      </Route>

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};
