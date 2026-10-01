import React from 'react';
import { LucideIcon, TrendingUp } from 'lucide-react';
import { useDeckTheme } from '../context/ThemeContext';

interface CalloutBoxProps {
  kicker?: string;
  metric?: string;
  description: string;
  icon?: LucideIcon;
  variant?: 'crimson' | 'primary' | 'neutral' | 'navy';
  className?: string;
}

export const CalloutBox: React.FC<CalloutBoxProps> = ({
  kicker = 'KEY STRATEGIC IMPLICATION',
  metric,
  description,
  icon: Icon = TrendingUp,
  variant = 'primary',
  className = '',
}) => {
  const { dominantColor, headerFont } = useDeckTheme();

  const isDominant = variant === 'crimson' || variant === 'primary';
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  return (
    <div
      className={`rounded-r-lg p-4 transition-all duration-200 border-l-4 ${className} ${
        !isDominant
          ? variant === 'navy'
            ? 'bg-slate-50 border-slate-800 text-neutral-900'
            : 'bg-neutral-50 border-neutral-400 text-neutral-900'
          : ''
      }`}
      style={
        isDominant
          ? {
              backgroundColor: dominantColor.lightHex,
              borderLeftColor: dominantColor.hex,
            }
          : undefined
      }
    >
      <div className="flex items-center gap-2 mb-1.5">
        <Icon
          size={16}
          className={!isDominant ? (variant === 'navy' ? 'text-slate-800' : 'text-neutral-600') : ''}
          style={isDominant ? { color: dominantColor.hex } : undefined}
        />
        <span
          className={`text-xs font-bold uppercase tracking-wider ${
            !isDominant ? (variant === 'navy' ? 'text-slate-800' : 'text-neutral-600') : ''
          }`}
          style={isDominant ? { color: dominantColor.hex } : undefined}
        >
          {kicker}
        </span>
      </div>

      {metric && (
        <div
          className={`text-2xl font-bold tracking-tight mb-1 ${fontClass} ${
            !isDominant ? (variant === 'navy' ? 'text-slate-900' : 'text-neutral-900') : 'text-neutral-950'
          }`}
        >
          {metric}
        </div>
      )}

      <p className="text-xs md:text-sm text-neutral-700 leading-relaxed font-sans">
        {description}
      </p>
    </div>
  );
};

