const Card = ({ className = "", children, ...props }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };