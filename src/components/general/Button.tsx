type ButtonProps = {
  className?: string;
  children?: any;
  rest?: object,
  onClick?: any,
  disabled?: boolean
}; 


export const Button = ({ children, className, onClick,disabled,...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};