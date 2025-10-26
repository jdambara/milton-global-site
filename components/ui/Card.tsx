import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  nested?: boolean;
  className?: string;
}

export default function Card({ children, hover = false, nested = false, className = '' }: CardProps) {
  const cardClass = nested 
    ? 'card-nested' 
    : hover 
    ? 'card-hover' 
    : 'card';
  
  return (
    <div className={`${cardClass} ${className}`}>
      {children}
    </div>
  );
}


