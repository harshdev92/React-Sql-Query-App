import React from "react";


export const Button = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
};