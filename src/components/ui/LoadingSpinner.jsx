import React from "react";

const LoadingSpinner = ({ fullScreen = false, size = "md" }) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
    xl: "h-16 w-16 border-4",
  };

  const spinnerElement = (
    <div
      className={`animate-spin rounded-full ${sizeClasses[size]} border-t-transparent border-primary-500`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 z-50">
        {spinnerElement}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center p-4">{spinnerElement}</div>
  );
};

export default LoadingSpinner;
