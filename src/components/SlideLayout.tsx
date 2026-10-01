import React from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';

interface SlideLayoutProps {
  kicker: string;
  actionTitle: string;
  slideNumber: number;
  totalSlides: number;
  sourceText?: string;
  categoryTag?: string;
  children: React.ReactNode;
  className?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  kicker,
  actionTitle,
  slideNumber,
  totalSlides,
  sourceText = 'Source: McKinsey Global Institute / Bain Market Model Benchmark (2026)',
  categoryTag = 'STRATEGY ENGAGEMENT',
  children,
  className = '',
}) => {
  const { dominantColor, headerFont } = useDeckTheme();

  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  return (
    <div
      className={`relative w-full h-full bg-white text-neutral-900 flex flex-col justify-between overflow-hidden select-none p-6 sm:p-8 md:p-10 lg:p-12 ${className}`}
      style={{
        aspectRatio: '16/9',
      }}
    >
      {/* HEADER ZONE (Fixed height & location for zero layout wobble) */}
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="shrink-0 mb-4 md:mb-5"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-xs transition-colors duration-300"
            style={{ backgroundColor: dominantColor.hex }}
          />
          <span
            className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300"
            style={{ color: dominantColor.hex }}
          >
            {kicker}
          </span>
        </div>

        <h1
          className={`${fontClass} text-lg sm:text-xl md:text-2xl lg:text-[25px] font-bold text-neutral-950 leading-tight tracking-tight line-clamp-2 transition-all duration-200`}
        >
          {actionTitle}
        </h1>

        <div className="mt-3 w-full h-[1px] bg-neutral-200" />
      </motion.div>

      {/* MAIN CONTENT AREA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.995 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, ease: 'easeOut', delay: 0.05 }}
        className="flex-1 min-h-0 flex flex-col overflow-hidden py-1"
      >
        {children}
      </motion.div>

      {/* FIXED FOOTER ZONE */}
      <div className="shrink-0 mt-3 pt-2.5 border-t border-neutral-200 flex items-center justify-between text-[10px] sm:text-[11px] text-neutral-500">
        <div className="truncate max-w-[65%] italic text-neutral-500">
          {sourceText}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span
            className="font-semibold tracking-wider text-[9px] sm:text-[10px] transition-colors duration-300"
            style={{ color: dominantColor.hex }}
          >
            CONFIDENTIAL
          </span>
          <span className="text-neutral-300">|</span>
          <span className="font-mono tabular-nums font-medium text-neutral-700">
            Slide {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};

