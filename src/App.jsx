import { Suspense } from "react";
import { Routes } from "@routes/index";
import LoadingSpinner from "@components/ui/LoadingSpinner";

function App() {

  return (
    <Suspense fallback={<LoadingSpinner fullScreen />}>
      <Routes />
    </Suspense>
  );
}

export default App;
