import React from 'react';
import { motion } from 'motion/react';
import { TrendPoint } from '../../types';
import { useDeckTheme } from '../../context/ThemeContext';

interface TrendLineChartProps {
  data: TrendPoint[];
  unit?: string;
  maxY?: number;
  className?: string;
}

export const TrendLineChart: React.FC<TrendLineChartProps> = ({
  data,
  unit = '$M',
  maxY = 500,
  className = '',
}) => {
  const { dominantColor } = useDeckTheme();
  const width = 600;
  const height = 240;
  const paddingX = 40;
  const paddingY = 30;

  const chartW = width - paddingX * 2;
  const chartH = height - paddingY * 2;

  const getX = (index: number) => paddingX + (index / (data.length - 1)) * chartW;
  const getY = (val: number) => height - paddingY - (val / maxY) * chartH;

  // Actual line path
  const actualPoints = data
    .filter((d) => d.actual !== undefined)
    .map((d, i) => `${getX(i)},${getY(d.actual!)}`);
  const actualPath = `M ${actualPoints.join(' L ')}`;

  // Target line path
  const targetPoints = data.map((d, i) => `${getX(i)},${getY(d.target || d.actual || 0)}`);
  const targetPath = `M ${targetPoints.join(' L ')}`;

  return (
    <div className={`w-full h-full flex flex-col justify-between ${className}`}>
      <div className="relative w-full aspect-[2.4/1] flex items-center justify-center">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          {/* Horizontal grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = height - paddingY - ratio * chartH;
            return (
              <g key={ratio}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke="#E5E7EB"
                  strokeDasharray="4 4"
                />
                <text
                  x={paddingX - 8}
                  y={y + 3}
                  textAnchor="end"
                  className="text-[9px] fill-neutral-400 font-mono"
                >
                  {Math.round(ratio * maxY)}
                </text>
              </g>
            );
          })}

          {/* Target Dashed Line */}
          <path
            d={targetPath}
            fill="none"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeDasharray="6 4"
          />

          {/* Actual Solid Line (Dominant Color) */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            d={actualPath}
            fill="none"
            stroke={dominantColor.hex}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Data Points */}
          {data.map((d, i) => {
            const x = getX(i);
            const actualY = d.actual !== undefined ? getY(d.actual) : null;
            const targetY = d.target !== undefined ? getY(d.target) : null;

            return (
              <g key={d.label}>
                {/* X axis tick */}
                <text
                  x={x}
                  y={height - 10}
                  textAnchor="middle"
                  className="text-[10px] fill-neutral-600 font-semibold"
                >
                  {d.label}
                </text>

                {/* Target point indicator if different */}
                {targetY && d.target !== d.actual && (
                  <circle cx={x} cy={targetY} r="3.5" fill="#94A3B8" />
                )}

                {/* Actual node */}
                {actualY && (
                  <g>
                    <circle
                      cx={x}
                      cy={actualY}
                      r="5"
                      fill="#FFFFFF"
                      stroke={dominantColor.hex}
                      strokeWidth="2.5"
                    />
                    <text
                      x={x}
                      y={actualY - 8}
                      textAnchor="middle"
                      className="text-[10px] font-bold font-mono"
                      fill={dominantColor.hex}
                    >
                      {unit}{d.actual}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-2 border-t border-neutral-200">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span
              className="w-3 h-0.5 transition-colors"
              style={{ backgroundColor: dominantColor.hex }}
            />
            <span className="font-medium text-neutral-800">Actual Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 border-t-2 border-dashed border-slate-400" />
            <span>Strategic Plan / Forecast Target</span>
          </div>
        </div>
        <span>Y-axis: Millions ({unit})</span>
      </div>
    </div>
  );
};

