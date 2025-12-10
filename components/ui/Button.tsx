import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-bhive-bg light:focus:ring-offset-white focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary-gradient text-white hover:opacity-90 dark:shadow-lg dark:shadow-orange-500/20 light:shadow-md light:shadow-orange-400/30",
    secondary: "dark:bg-bhive-surface dark:text-white dark:hover:bg-neutral-700 dark:border-neutral-700 light:bg-gray-200 light:text-gray-900 light:hover:bg-gray-300 light:border-gray-300 border",
    outline: "dark:bg-transparent dark:border-white/20 dark:text-white dark:hover:bg-white/10 light:bg-gray-100 light:border-gray-300 light:text-gray-900 light:hover:bg-gray-200 border"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};