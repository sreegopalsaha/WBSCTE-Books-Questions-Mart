const Button = ({ variant = "default", className = "", children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium";
  const variantStyles = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
  };
  
  const styles = `${baseStyles} ${variantStyles[variant] || ''} ${className}`;
  
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export { Button };