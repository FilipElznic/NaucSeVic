import React from "react";

const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`
          ${sizes[size]} 
          border-4 
          border-gray-500 
          dark:border-gray-700 
          border-t-indigo-600 
          dark:border-t-indigo-400 
          rounded-full 
          animate-spin
        `}
      />
    </div>
  );
};

export default LoadingSpinner;
