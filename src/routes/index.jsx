import { lazy } from "react";
import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import ProtectedRoute from "@routes/ProtectedRoute";
import { Routers } from "@/Constants/Routes";

// Lazy-loaded pages for better performance
const Home = lazy(() => import("@pages/Home"));
const NotFound = lazy(() => import("@pages/NotFound"));

export const Routes = () => {

  return (
    <RouterRoutes>
      {/* Public routes */}
      <Route path={Routers.HOME} element={<MainLayout />}>
        <Route index element={<Home />} />
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
        {/* <Route path={Routers.DASHBOARD} element={<Dashboard />} /> */}
      </Route>

      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};
