import React from "react";

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  ...props
}) => {
  return (
    <div
      className={`
        bg-white dark:bg-zinc-800 
        rounded-2xl 
        shadow-sm 
        border border-gray-200 dark:border-zinc-700
        ${hover ? "hover:shadow-xl transition-all duration-300" : ""} 
        ${padding} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
