import React from 'react';
import { motion } from 'motion/react';
import { WaterfallStep } from '../../types';

interface WaterfallChartProps {
  steps: WaterfallStep[];
  unit?: string;
  baseMax?: number;
  className?: string;
}

export const WaterfallChart: React.FC<WaterfallChartProps> = ({
  steps,
  unit = '$M',
  baseMax,
  className = '',
}) => {
  // Calculate cumulative steps
  let cumulative = 0;
  const processed = steps.map((step) => {
    let start = 0;
    let end = 0;

    if (step.type === 'base' || step.type === 'total') {
      start = 0;
      end = step.value;
      cumulative = step.value;
    } else {
      start = cumulative;
      cumulative += step.value;
      end = cumulative;
    }

    return {
      ...step,
      start,
      end,
      bottom: Math.min(start, end),
      height: Math.abs(step.value),
    };
  });

  const maxValue = baseMax || Math.max(...processed.map((p) => Math.max(p.start, p.end))) * 1.18;

  return (
    <div className={`w-full h-full flex flex-col justify-between ${className}`}>
      {/* Chart Canvas */}
      <div className="flex-1 min-h-[160px] flex items-end justify-between gap-2 sm:gap-3.5 pt-6 pb-2 border-b border-neutral-300 relative">
        {/* Horizontal reference guides */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
          <div className="border-b border-dashed border-neutral-300 w-full" />
          <div className="border-b border-dashed border-neutral-300 w-full" />
          <div className="border-b border-dashed border-neutral-300 w-full" />
        </div>

        {processed.map((step, idx) => {
          const bottomPercent = (step.bottom / maxValue) * 100;
          const heightPercent = Math.max(4, (step.height / maxValue) * 100);

          let barColor = 'bg-slate-700'; // base
          let textColor = 'text-slate-800';

          if (step.type === 'positive') {
            barColor = 'bg-emerald-600';
            textColor = 'text-emerald-700';
          } else if (step.type === 'negative') {
            barColor = 'bg-[#C8102E]';
            textColor = 'text-[#C8102E]';
          } else if (step.type === 'total') {
            barColor = 'bg-slate-900 ring-2 ring-slate-300';
            textColor = 'text-slate-950';
          }

          return (
            <div
              key={step.label}
              className="flex-1 flex flex-col items-center justify-end h-full relative group z-10"
            >
              {/* Value label */}
              <div
                className="absolute text-[10px] sm:text-[11px] font-bold tabular-nums whitespace-nowrap"
                style={{
                  bottom: `calc(${bottomPercent + heightPercent}% + 4px)`,
                }}
              >
                <span className={textColor}>
                  {step.value > 0 && step.type === 'positive' ? '+' : ''}
                  {step.formattedValue || `${unit}${step.value}`}
                </span>
              </div>

              {/* Bar */}
              <div className="w-full max-w-[42px] sm:max-w-[50px] h-full relative">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: `${heightPercent}%`, opacity: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.05,
                    ease: 'easeOut',
                  }}
                  className={`w-full rounded-xs absolute transition-colors ${barColor}`}
                  style={{
                    bottom: `${bottomPercent}%`,
                  }}
                />
              </div>

              {/* Step X-axis Label */}
              <div className="mt-2 text-center">
                <span className="text-[9px] sm:text-[10px] font-medium text-neutral-700 block leading-tight truncate max-w-[65px] sm:max-w-[80px]">
                  {step.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-2 text-[10px] text-neutral-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-slate-700" />
            <span>Baseline / Anchor</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600" />
            <span>Value Drivers (+)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#C8102E]" />
            <span>Headwinds / Cost (-)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-slate-900" />
            <span>Net Target</span>
          </div>
        </div>
        <span className="italic">All metrics normalized in {unit}</span>
      </div>
    </div>
  );
};
