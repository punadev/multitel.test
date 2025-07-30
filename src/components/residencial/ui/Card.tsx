import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  className = '', 
  children, 
  hover = false
}) => {
  return (
    <div 
      className={`
        bg-white rounded-xl shadow-md overflow-hidden 
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;