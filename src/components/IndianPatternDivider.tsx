import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface IndianPatternDividerProps {
  className?: string;
  variant?: 'simple' | 'elaborate' | 'subtle' | 'lotus';
}

export const IndianPatternDivider: React.FC<IndianPatternDividerProps> = ({ 
  className = '', 
  variant = 'simple' 
}) => {
  const { isBengali } = useLanguage();

  if (variant === 'subtle') {
    return (
      <div className={`w-full flex items-center justify-center py-4 ${className}`} aria-hidden="true">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-900/25 to-transparent w-full max-w-xl"></div>
        <div className="mx-3 text-blue-900 flex items-center gap-1.5 opacity-80">
          <span className="w-1.5 h-1.5 rotate-45 bg-orange-500"></span>
          <span className="w-2.5 h-2.5 rotate-45 border border-blue-900 bg-white"></span>
          <span className="w-1.5 h-1.5 rotate-45 bg-orange-500"></span>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-900/25 to-transparent w-full max-w-xl"></div>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden select-none py-3 ${className}`} aria-hidden="true">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-900/20 to-blue-900/40 flex-grow"></div>
        
        {/* Repeating Bengali folk motif in Blue and Saffron */}
        <div className="flex items-center space-x-1.5 sm:space-x-2.5 px-2 sm:px-4 text-blue-900 shrink-0">
          <svg className="w-5 h-5 text-blue-800" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1" />
            <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1" />
            <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" stroke="currentColor" strokeWidth="0.8" />
            <line x1="18.4" y1="5.6" x2="5.6" y2="18.4" stroke="currentColor" strokeWidth="0.8" />
          </svg>

          {/* Saffron and Blue folk accents */}
          <div className="hidden sm:flex items-center space-x-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span className="w-2 h-2 rotate-45 border border-blue-900 bg-white"></span>
            <span className="w-2.5 h-2.5 rotate-45 bg-orange-500"></span>
            <span className="w-2 h-2 rotate-45 border border-blue-900 bg-white"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          </div>

          <div className="text-[10px] min-[360px]:text-[11px] sm:text-sm font-serif-heading tracking-wider sm:tracking-widest text-blue-900 font-bold px-2 sm:px-3 uppercase whitespace-nowrap text-center shrink-0">
            {isBengali ? 'শিক্ষা • ঐক্য • ঐতিহ্য • ন্যায়' : 'Education • Unity • Heritage • Justice'}
          </div>

          <div className="hidden sm:flex items-center space-x-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span className="w-2 h-2 rotate-45 border border-blue-900 bg-white"></span>
            <span className="w-2.5 h-2.5 rotate-45 bg-orange-500"></span>
            <span className="w-2.5 h-2.5 rotate-45 border border-blue-900 bg-white"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          </div>

          <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>

        <div className="h-px bg-gradient-to-l from-transparent via-blue-900/20 to-blue-900/40 flex-grow"></div>
      </div>
    </div>
  );
};
