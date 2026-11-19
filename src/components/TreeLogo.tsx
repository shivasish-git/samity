import React from 'react';

interface TreeLogoProps {
  className?: string;
  alt?: string;
}

export const TreeLogo: React.FC<TreeLogoProps> = ({ 
  className = "w-12 h-12 rounded-xl",
  alt = "Bangiya Saha Samity Official Emblem",
}) => {
  return (
    <div 
      className={`relative overflow-hidden shrink-0 shadow-sm border border-amber-300/80 bg-gradient-to-b from-amber-50/90 via-white to-amber-100/80 flex items-center justify-center p-0.5 ${className}`}
    >
      <img
        src="/logo.webp"
        alt={alt}
        className="w-full h-full object-contain drop-shadow-xs transition-transform duration-300"
        referrerPolicy="no-referrer"
        onError={(e) => {
          const target = e.currentTarget;
          if (!target.src.includes('ac7olxc0s.webp')) {
            target.src = '/ac7olxc0s.webp';
          }
        }}
      />
    </div>
  );
};

