import { Suspense, useEffect } from "react";
import { Routes } from "@routes/index";
import { useAuthStore } from "@store/authStore";
import LoadingSpinner from "@components/ui/LoadingSpinner";

function App() {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    // Check if user is authenticated on app initialization
    checkAuth();
  }, [checkAuth]);

  return (
    <Suspense fallback={<LoadingSpinner fullScreen />}>
      <Routes />
    </Suspense>
  );
}

export default App;
