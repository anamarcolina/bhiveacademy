import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'dark' | 'darker';
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, bg = 'dark' }) => {
  const bgClass = bg === 'dark'
    ? 'dark:bg-bhive-bg light:bg-white'
    : 'dark:bg-[#0a0a0a] light:bg-gray-50';
  return (
    <section id={id} className={`py-20 md:py-32 px-6 ${bgClass} transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};