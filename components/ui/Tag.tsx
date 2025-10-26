interface TagProps {
  children: React.ReactNode;
  variant?: 'forex' | 'regulation' | 'ultency' | 'announcement' | 'default';
  className?: string;
}

export default function Tag({ children, variant = 'default', className = '' }: TagProps) {
  const variantClass = variant === 'forex' 
    ? 'tag-forex'
    : variant === 'regulation'
    ? 'tag-regulation'
    : variant === 'ultency'
    ? 'tag-ultency'
    : variant === 'announcement'
    ? 'tag-announcement'
    : 'tag bg-gray-100 text-gray-700';
  
  return (
    <span className={`${variantClass} ${className}`}>
      {children}
    </span>
  );
}

