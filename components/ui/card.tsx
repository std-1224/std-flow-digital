import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hasHover?: boolean;
  isGlass?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hasHover = false,
  isGlass = false
}) => {
  const baseClasses = 'rounded-xl p-6';
  
  const hoverClasses = hasHover 
    ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' 
    : '';
  
  const glassClasses = isGlass 
    ? 'bg-white/70 backdrop-blur-lg border border-white/20' 
    : 'bg-white border border-gray-100';
  
  const shadowClasses = 'shadow-sm';
  
  const classes = `${baseClasses} ${hoverClasses} ${glassClasses} ${shadowClasses} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;