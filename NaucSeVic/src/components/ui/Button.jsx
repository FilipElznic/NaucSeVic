import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:ring-indigo-500 shadow-lg hover:shadow-xl transform hover:scale-105",
    secondary:
      "text-gray-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-zinc-700 focus:ring-gray-500 shadow-lg hover:shadow-xl",
    outline:
      "text-indigo-600 dark:text-indigo-400 bg-transparent border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-zinc-900 focus:ring-indigo-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:transform-none hover:shadow-none"
    : "";

  return (
    <button
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabledClasses} 
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
