import React from 'react';
import { motion } from 'motion/react';
import { BarDataPoint } from '../../types';
import { useDeckTheme } from '../../context/ThemeContext';

interface MetricBarChartProps {
  data: BarDataPoint[];
  unit?: string;
  maxValue?: number;
  highlightLabel?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const MetricBarChart: React.FC<MetricBarChartProps> = ({
  data,
  unit = '$M',
  maxValue,
  highlightLabel,
  title,
  subtitle,
  className = '',
}) => {
  const { dominantColor } = useDeckTheme();
  const calculatedMax = maxValue || Math.max(...data.map((d) => d.value)) * 1.15;

  return (
    <div className={`w-full h-full flex flex-col justify-between ${className}`}>
      {(title || subtitle) && (
        <div className="mb-3 shrink-0">
          {title && (
            <div className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
              {title}
            </div>
          )}
          {subtitle && (
            <div className="text-[11px] text-neutral-500 mt-0.5">
              {subtitle}
            </div>
          )}
        </div>
      )}

      {/* Chart grid */}
      <div className="flex-1 min-h-[160px] flex items-end justify-between gap-3 sm:gap-6 pt-4 pb-2 border-b border-neutral-300 relative">
        {/* Subtle background horizontal benchmark lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
          <div className="border-b border-dashed border-neutral-200 w-full" />
          <div className="border-b border-dashed border-neutral-200 w-full" />
          <div className="border-b border-dashed border-neutral-200 w-full" />
        </div>

        {data.map((item, idx) => {
          const isHighlight = item.highlight || item.label === highlightLabel;
          const heightPercent = Math.min(100, Math.max(6, (item.value / calculatedMax) * 100));

          return (
            <div
              key={item.label}
              className="flex-1 flex flex-col items-center justify-end h-full relative group z-10"
            >
              {/* Value Callout above bar */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`text-[11px] sm:text-xs font-bold mb-1.5 tabular-nums transition-transform ${
                  isHighlight ? 'scale-105' : 'text-neutral-700'
                }`}
                style={isHighlight ? { color: dominantColor.hex } : undefined}
              >
                {item.formattedValue || `${unit}${item.value}`}
              </motion.div>

              {/* Bar */}
              <div className="w-full max-w-[48px] sm:max-w-[56px] h-full flex items-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${heightPercent}%` }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`w-full rounded-t-sm transition-colors duration-200 ${
                    !isHighlight ? 'bg-slate-700 hover:bg-slate-800' : 'shadow-sm'
                  }`}
                  style={
                    isHighlight
                      ? {
                          backgroundColor: dominantColor.hex,
                        }
                      : undefined
                  }
                />
              </div>

              {/* Sublabel or growth indicator */}
              {item.sublabel && (
                <span
                  className="text-[9px] font-semibold mt-1 px-1 rounded"
                  style={
                    isHighlight
                      ? {
                          backgroundColor: dominantColor.lightHex,
                          color: dominantColor.hex,
                        }
                      : { color: '#6B7280' }
                  }
                >
                  {item.sublabel}
                </span>
              )}

              {/* X-axis Label */}
              <span
                className={`text-[10px] sm:text-[11px] font-semibold mt-2 truncate max-w-full ${
                  !isHighlight ? 'text-neutral-600' : 'font-bold'
                }`}
                style={isHighlight ? { color: dominantColor.hex } : undefined}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Legend / Note */}
      <div className="flex items-center justify-between mt-2 text-[10px] text-neutral-400">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-xs transition-colors"
              style={{ backgroundColor: dominantColor.hex }}
            />
            <span className="text-neutral-700 font-medium">Strategic Target / High Priority</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-slate-700" />
            <span className="text-neutral-600">Historical / Baseline</span>
          </div>
        </div>
        <span className="italic">Values indexed in {unit}</span>
      </div>
    </div>
  );
};

