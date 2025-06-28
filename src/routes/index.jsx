import { lazy } from "react";
import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import ProtectedRoute from "@routes/ProtectedRoute";
import { Routers } from "@/Constants/Routes";

// Lazy-loaded pages for better performance
const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const Dashboard = lazy(() => import("@pages/Dashboard"));
const NotFound = lazy(() => import("@pages/NotFound"));

export const Routes = () => {

  return (
    <RouterRoutes>
      {/* Public routes */}
      <Route path={Routers.HOME} element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route
          path={Routers.LOGIN}
          element={
            isAuthenticated ? <Navigate to={Routers.DASHBOARD} replace /> : <Login />
          }
        /> */}
      </Route>

      {/* Protected routes */}
      <Route
        path={Routers.HOME}
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path={Routers.DASHBOARD} element={<Dashboard />} />
      </Route>

      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};
