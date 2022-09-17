import React from "react";

export const Button = ({ children, className, handleClick }) => {
  return (
    <button
      className={`bg-primary-color hover:bg-seconday-color transition-colors text-white rounded-md font-semibold px-4 py-2 my-4 shadow-lg ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
