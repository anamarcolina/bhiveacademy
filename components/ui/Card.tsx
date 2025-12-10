import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  active?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  active = false
}) => {
  // Enhanced Glassmorphism: gradient for sheen, strong blur, subtle border
  const baseStyles = "dark:bg-gradient-to-b dark:from-white/[0.05] dark:to-white/[0.01] light:bg-white light:from-gray-50/50 light:to-white backdrop-blur-2xl dark:border-white/10 light:border-gray-200 border rounded-2xl relative overflow-hidden p-6 md:p-8 dark:shadow-2xl dark:shadow-black/20 light:shadow-md light:shadow-gray-200";
  const hoverStyles = hoverEffect ? "transition-all duration-500 dark:hover:-translate-y-2 light:hover:-translate-y-1 dark:hover:from-white/[0.08] dark:hover:to-white/[0.02] dark:hover:shadow-orange-500/10 light:hover:shadow-orange-500/10 dark:hover:border-white/20 light:hover:border-orange-200" : "";
  const activeStyles = active ? "ring-2 ring-orange-500 dark:bg-white/[0.06] light:bg-orange-50" : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${activeStyles} ${className}`}>
      {children}
    </div>
  );
};

export const NumberedCard: React.FC<{ number: string; title: string; children: React.ReactNode; bgImage?: string }> = ({
  number,
  title,
  children,
  bgImage
}) => {
  return (
    <div className="group relative dark:bg-gradient-to-b dark:from-white/[0.05] dark:to-white/[0.01] light:bg-white backdrop-blur-2xl dark:border-white/10 light:border-gray-200 border rounded-3xl overflow-hidden h-full min-h-[320px] transition-all duration-500 dark:hover:shadow-2xl dark:hover:shadow-orange-900/10 light:hover:shadow-lg light:hover:shadow-orange-200 dark:hover:border-white/20 light:hover:border-orange-300 hover:-translate-y-1">
      {bgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-20 mix-blend-overlay"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          {/* Gradient overlay to ensure text readability over image - dark theme */}
          <div className="dark:block hidden absolute inset-0 bg-gradient-to-b from-[#121212]/40 via-[#121212]/80 to-[#121212]" />
          {/* Gradient overlay for light theme */}
          <div className="light:block hidden absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
        </>
      )}

      <div className="relative z-10 p-8 flex flex-col h-full">
        <span className="dark:text-white/10 light:text-gray-200 text-5xl font-bold mb-6 dark:group-hover:text-orange-500/20 light:group-hover:text-orange-400/20 transition-colors">
          {number}
        </span>
        <h3 className="dark:text-white light:text-gray-900 text-2xl font-bold mb-4">{title}</h3>
        <p className="dark:text-bhive-subtext light:text-gray-600 leading-relaxed font-light">
          {children}
        </p>
      </div>
    </div>
  );
};