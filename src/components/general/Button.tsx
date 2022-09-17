import React from "react";

type ButtonProps = {
  className?: string;
  children?: any;
  rest?: object,
  handleClick?: any
}; 


export const Button = ({ children, className, handleClick,...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};