import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useDeckTheme } from '../context/ThemeContext';

interface IconBadgeProps {
  icon: LucideIcon;
  size?: number;
  variant?: 'primary' | 'muted' | 'outline' | 'navy';
  className?: string;
}

export const IconBadge: React.FC<IconBadgeProps> = ({
  icon: IconComponent,
  size = 18,
  variant = 'primary',
  className = '',
}) => {
  const { dominantColor } = useDeckTheme();

  const isPrimary = variant === 'primary';

  const variantStyles = {
    primary: '',
    muted: 'bg-neutral-100 text-neutral-700 border-neutral-200',
    outline: 'bg-white text-neutral-800 border-neutral-300',
    navy: 'bg-slate-100 text-slate-800 border-slate-200',
  };

  return (
    <div
      className={`inline-flex items-center justify-center w-9 h-9 rounded-md border shrink-0 transition-colors ${
        !isPrimary ? variantStyles[variant] : ''
      } ${className}`}
      style={
        isPrimary
          ? {
              backgroundColor: dominantColor.lightHex,
              color: dominantColor.hex,
              borderColor: dominantColor.borderHex,
            }
          : undefined
      }
    >
      <IconComponent size={size} strokeWidth={2} />
    </div>
  );
};

