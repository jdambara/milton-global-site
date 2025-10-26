import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'dark';
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  onClick,
  className = '',
  external = false 
}: ButtonProps) {
  const buttonClass = variant === 'primary' ? 'btn-primary' : variant === 'dark' ? 'btn-dark' : 'btn-secondary';
  
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} ${className}`}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={`${buttonClass} ${className}`}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={`${buttonClass} ${className}`}>
      {children}
    </button>
  );
}


